import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my_ilnbdt.css';
import '../../css/s/sgxsvf1wu.css';
import '../../css/w/wr4ds1bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my_ilnbdt wm-shadow"/><path class="sgxsvf1wu wm-k"/><path class="wm-k wr4ds1bix"/>`,
		"fallback": "withicons-pastel:paperclip",
	});
}

export default Component;
