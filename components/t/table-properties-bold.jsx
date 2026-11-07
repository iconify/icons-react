import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5-2keb6j.css';
import '../../css/n/ngqtlcoaq.css';
import '../../css/h/hqo5-g8_n.css';
import '../../css/w/w2qhwh4_j.css';
import '../../css/u/uez9mdbud.css';
import '../../css/o/ox_n4815v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5-2keb6j"/><path class="ngqtlcoaq"/><path class="hqo5-g8_n"/><path class="w2qhwh4_j"/><path class="uez9mdbud"/><path class="ox_n4815v"/>`,
		"fallback": "solar:table-properties-bold",
	});
}

export default Component;
