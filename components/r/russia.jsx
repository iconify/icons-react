import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic98o8bay.css';
import '../../css/w/wprsklb5k.css';
import '../../css/o/owe3-0brr.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic98o8bay"/><path class="wprsklb5k"/><path class="owe3-0brr"/>`,
		"fallback": "tabler-flags:russia",
	});
}

export default Component;
