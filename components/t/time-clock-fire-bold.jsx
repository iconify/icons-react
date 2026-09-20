import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsf-qnbqy.css';
import '../../css/b/b19x8pyha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsf-qnbqy"/><path class="b19x8pyha"/>`,
		"fallback": "streamline-ultimate:time-clock-fire-bold",
	});
}

export default Component;
