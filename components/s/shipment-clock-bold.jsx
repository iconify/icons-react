import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmb9qwzcd.css';
import '../../css/k/kck_r-j2q.css';
import '../../css/g/g2ked1l6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmb9qwzcd"/><path class="kck_r-j2q"/><path class="g2ked1l6w"/>`,
		"fallback": "streamline-ultimate:shipment-clock-bold",
	});
}

export default Component;
