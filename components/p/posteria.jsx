import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys8turbgx.css';
import '../../css/r/r5bfu2tfk.css';
import '../../css/e/e8ygrwbil.css';
import '../../css/q/q75jjebbk.css';
import '../../css/z/zz-ow3bzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys8turbgx"/><path class="r5bfu2tfk"/><path class="e8ygrwbil"/><circle class="q75jjebbk"/><path class="zz-ow3bzn"/>`,
		"fallback": "selfhst:posteria",
	});
}

export default Component;
