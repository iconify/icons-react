import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfniv6mla.css';
import '../../css/r/rl-6rnbqs.css';
import '../../css/g/gf-bxrb8a.css';
import '../../css/m/mu4n766oh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfniv6mla"/><path class="rl-6rnbqs"/><path class="gf-bxrb8a"/><circle class="mu4n766oh"/>`,
		"fallback": "ion:ios-camera-outline",
	});
}

export default Component;
