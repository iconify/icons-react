import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg6z7owzi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kg6z7owzi"/>`,
		"fallback": "gravity-ui:toggle-on",
	});
}

export default Component;
