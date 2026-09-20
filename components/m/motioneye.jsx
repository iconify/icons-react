import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea24ebbtv.css';
import '../../css/i/il3gm6b7g.css';
import '../../css/c/cvwrb4bdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGI8KubeUZ" x1="256.076" x2="256.076" y1="-96.007" y2="626.727" gradientUnits="userSpaceOnUse"><stop offset="0" class="ea24ebbtv"/><stop offset="1" class="il3gm6b7g"/></linearGradient><path fill="url(#SVGI8KubeUZ)" class="cvwrb4bdp"/>`,
		"fallback": "selfhst:motioneye",
	});
}

export default Component;
