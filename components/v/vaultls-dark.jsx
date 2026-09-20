import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay8vxacgb.css';
import '../../css/k/kutl9dbta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGuruFbe8z" x1="48.154" x2="115.519" y1="575.296" y2="408.562" gradientTransform="matrix(2.8479 0 0 -2.8498 18.771 1647.394)" gradientUnits="userSpaceOnUse"><stop offset=".01"/><stop offset="1" class="ay8vxacgb"/></linearGradient><path fill="url(#SVGuruFbe8z)" class="kutl9dbta"/>`,
		"fallback": "selfhst:vaultls-dark",
	});
}

export default Component;
