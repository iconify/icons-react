import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv5s23ivq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nv5s23ivq"/>`,
		"fallback": "gravity-ui:list-check",
	});
}

export default Component;
