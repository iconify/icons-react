import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/trvlwlkpt.css';
import '../../css/v/v6xzebcxs.css';
import '../../css/n/ntjofks6n.css';
import '../../css/u/uwk18x-nq.css';
import '../../css/z/zcn25pb3a.css';
import '../../css/g/gkt5wieix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdRPAkeZl" x1="10" x2="14" y1="1.69" y2="21.81" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="trvlwlkpt wm-k"/><path class="v6xzebcxs wm-a"/><path class="ntjofks6n wm-deco"/><path fill="url(#SVGdRPAkeZl)" class="uwk18x-nq wm-k"/><path class="wm-a zcn25pb3a"/><path class="gkt5wieix wm-shadow"/></g>`,
		"fallback": "withicons-valentine:layers",
	});
}

export default Component;
