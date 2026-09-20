import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cipd75yfc.css';
import '../../css/v/vmz_v3bkv.css';
import '../../css/l/l3_nh_z-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cipd75yfc"/><path class="vmz_v3bkv"/><path class="l3_nh_z-f"/>`,
		"fallback": "selfhst:microsoft-teams-light",
	});
}

export default Component;
