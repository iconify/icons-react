import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cle0u0bwz.css';
import '../../css/h/hb_oaob_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cle0u0bwz"/><path class="hb_oaob_u"/>`,
		"fallback": "octicon:video-24",
	});
}

export default Component;
