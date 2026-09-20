import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2_qewbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2_qewbzl"/>`,
		"fallback": "reicon:music",
	});
}

export default Component;
