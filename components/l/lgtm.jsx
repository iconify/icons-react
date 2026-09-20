import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckuicm7cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckuicm7cn"/>`,
		"fallback": "simple-icons:lgtm",
	});
}

export default Component;
