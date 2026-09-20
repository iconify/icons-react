import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/monshfqpy.css';
import '../../css/w/wbrphj3qk.css';
import '../../css/s/sc3tshfxe.css';
import '../../css/a/ahxg7rb2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="monshfqpy"/><path class="wbrphj3qk"/><path class="sc3tshfxe"/><path class="ahxg7rb2t"/>`,
		"fallback": "selfhst:playstation",
	});
}

export default Component;
