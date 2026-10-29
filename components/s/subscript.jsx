import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2ch6-ban.css';
import '../../css/k/kmvltdbhh.css';
import '../../css/m/mx_g6rb3q.css';
import '../../css/w/wgjztzbms.css';
import '../../css/c/czugqwb_p.css';
import '../../css/r/rrp9v8czq.css';
import '../../css/i/irft7ub_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2ch6-ban wm-shadow"/><path class="kmvltdbhh wm-k"/><path class="mx_g6rb3q wm-k"/><path class="wgjztzbms wm-k"/><path class="czugqwb_p wm-k"/><path class="rrp9v8czq wm-shine"/><path class="irft7ub_b wm-a"/>`,
		"fallback": "withicons-pastel:subscript",
	});
}

export default Component;
