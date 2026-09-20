import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au678ubac.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="au678ubac"/>`,
		"fallback": "streamline-flex:serving-dome-hand-solid",
	});
}

export default Component;
