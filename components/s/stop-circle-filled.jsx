import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chsij3_2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chsij3_2k"/>`,
		"fallback": "tdesign:stop-circle-filled",
	});
}

export default Component;
