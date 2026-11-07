import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdp_xxbiy.css';
import '../../css/z/zutdd9mbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdp_xxbiy"/><path clip-rule="evenodd" class="zutdd9mbh"/>`,
		"fallback": "solar:lock-keyhole-minimalistic-outline",
	});
}

export default Component;
