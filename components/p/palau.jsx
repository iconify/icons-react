import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djvu6_z9o.css';
import '../../css/w/wxfft0bkm.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djvu6_z9o"/><path class="wxfft0bkm"/>`,
		"fallback": "tabler-flags:palau",
	});
}

export default Component;
