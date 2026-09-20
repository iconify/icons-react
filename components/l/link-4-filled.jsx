import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdrz6jbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdrz6jbwb"/>`,
		"fallback": "reicon:link-4-filled",
	});
}

export default Component;
