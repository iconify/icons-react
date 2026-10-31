import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/t/th5qioo6r.css';
import '../../css/i/ijt5dv6zq.css';
import '../../css/a/asn4y_b5p.css';
import '../../css/q/q78fkzd7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDpaaoc1D" x1="1.5" x2="22.49" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGDpaaoc1D)" class="th5qioo6r wm-k"/><path fill="url(#SVGDpaaoc1D)" class="ijt5dv6zq wm-a"/><path class="asn4y_b5p wm-shine"/><path class="q78fkzd7e wm-shine"/></g>`,
		"fallback": "withicons-lunar:trees",
	});
}

export default Component;
