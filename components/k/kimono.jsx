import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5bzk8byp.css';
import '../../css/i/ijub1k4zp.css';
import '../../css/y/y8e7nw0it.css';
import '../../css/p/pcspi3y9a.css';
import '../../css/b/b4lrop_ll.css';
import '../../css/p/pklm-ibpd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5bzk8byp"/><path class="ijub1k4zp"/><path class="y8e7nw0it"/><path class="pcspi3y9a"/><path class="b4lrop_ll"/><path class="pklm-ibpd"/>`,
		"fallback": "fxemoji:kimono",
	});
}

export default Component;
