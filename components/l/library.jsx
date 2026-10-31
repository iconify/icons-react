import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/m/mcy_udbym.css';
import '../../css/o/o_p4a74fu.css';
import '../../css/y/y7z0kt04i.css';
import '../../css/f/fos0ksb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmUybly5g" x1="1.5" x2="22.48" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="mcy_udbym wm-k"/><path fill="url(#SVGmUybly5g)" class="o_p4a74fu wm-a"/><path class="wm-shine y7z0kt04i"/><path class="fos0ksb7c wm-shine"/></g>`,
		"fallback": "withicons-lunar:library",
	});
}

export default Component;
