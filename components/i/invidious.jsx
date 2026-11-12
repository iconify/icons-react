import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxvcavblc.css';
import '../../css/f/fr7kxcbqo.css';
import '../../css/e/exoxidbsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxvcavblc"/><path class="fr7kxcbqo"/><path class="exoxidbsb"/>`,
		"fallback": "selfhst:invidious",
	});
}

export default Component;
