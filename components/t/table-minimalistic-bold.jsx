import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3lzwvbgs.css';
import '../../css/l/lcfo8_bek.css';
import '../../css/t/tiy7a-vsh.css';
import '../../css/n/n-k1pzbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3lzwvbgs"/><path class="lcfo8_bek"/><path class="tiy7a-vsh"/><path class="n-k1pzbhc"/>`,
		"fallback": "solar:table-minimalistic-bold",
	});
}

export default Component;
