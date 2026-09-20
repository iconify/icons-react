import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2ds99bls.css';
import '../../css/y/yurlis35z.css';
import '../../css/b/b93z67b5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2ds99bls"/><path class="yurlis35z"/><path class="b93z67b5r"/>`,
		"fallback": "selfhst:mailrise-dark",
	});
}

export default Component;
