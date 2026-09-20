import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkx980bcs.css';
import '../../css/w/wy4co49ap.css';
import '../../css/m/mpnffo9bz.css';
import '../../css/c/ccv8md5ux.css';
import '../../css/i/ijutckbcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkx980bcs"/><path class="wy4co49ap"/><path class="mpnffo9bz"/><path class="ccv8md5ux"/><path class="ijutckbcg"/>`,
		"fallback": "selfhst:microsoft-forms-light",
	});
}

export default Component;
