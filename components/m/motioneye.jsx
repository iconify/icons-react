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
		"content": `<linearGradient id="SVGFfbq8ceP" x1="256.1" x2="256.1" y1="-96" y2="626.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="ea24ebbtv"/><stop offset="1" class="il3gm6b7g"/></linearGradient><path fill="url(#SVGFfbq8ceP)" class="cvwrb4bdp"/>`,
		"fallback": "selfhst:motioneye",
	});
}

export default Component;
