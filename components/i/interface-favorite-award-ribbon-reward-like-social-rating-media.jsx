import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wt9mfjbeb.css';
import '../../css/c/cmgpsgvbe.css';
import '../../css/z/zcuddm6rv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="wt9mfjbeb"/><circle class="cmgpsgvbe"/><path class="zcuddm6rv"/></g>`,
		"fallback": "streamline:interface-favorite-award-ribbon-reward-like-social-rating-media",
	});
}

export default Component;
