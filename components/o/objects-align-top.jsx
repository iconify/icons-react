import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd4fmoboq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dd4fmoboq"/>`,
		"fallback": "gravity-ui:objects-align-top",
	});
}

export default Component;
