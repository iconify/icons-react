import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwqo1vzck.css';
import '../../css/v/v-lkf8-lr.css';
import '../../css/n/nkzy3-8yt.css';
import '../../css/h/h37eucblg.css';
import '../../css/g/gnsmh12yv.css';
import '../../css/r/ruec2877h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwqo1vzck"/><path class="v-lkf8-lr"/><path class="nkzy3-8yt"/><path class="h37eucblg"/><path class="gnsmh12yv"/><path class="ruec2877h"/>`,
		"fallback": "ion:ios-game-controller-a-outline",
	});
}

export default Component;
