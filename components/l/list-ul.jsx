import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6l20hbea.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o6l20hbea"/>`,
		"fallback": "gravity-ui:list-ul",
	});
}

export default Component;
