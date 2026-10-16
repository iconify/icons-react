import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlx-j4b2l.css';
import '../../css/i/i1jiqq9ax.css';
import '../../css/q/qrdc0-ekd.css';
import '../../css/x/xfroabbqq.css';
import '../../css/o/oiztm8pon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlx-j4b2l"/><path class="i1jiqq9ax"/><path class="qrdc0-ekd"/><path class="xfroabbqq"/><path class="oiztm8pon"/>`,
		"fallback": "energy-icons:timeline-20-bold",
	});
}

export default Component;
