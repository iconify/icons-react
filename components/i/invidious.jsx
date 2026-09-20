import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxvcavblc.css';
import '../../css/x/xy40cepxe.css';
import '../../css/e/exoxidbsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxvcavblc"/><path class="xy40cepxe"/><path class="exoxidbsb"/>`,
		"fallback": "selfhst:invidious",
	});
}

export default Component;
