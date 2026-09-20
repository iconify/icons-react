import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uivcxx24w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uivcxx24w"/>`,
		"fallback": "lsicon:surface-front-filled",
	});
}

export default Component;
