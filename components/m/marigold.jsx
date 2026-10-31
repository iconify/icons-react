import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ou8kr9b4g.css';
import '../../css/x/xiyd5rbeh.css';
import '../../css/z/z1si1vb9t.css';
import '../../css/k/kc_aaccvo.css';
import '../../css/r/rb4dvcd4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ou8kr9b4g wm-shadow"/><path class="wm-shadow xiyd5rbeh"/><path class="z1si1vb9t"/><path class="kc_aaccvo"/><path class="rb4dvcd4h"/></g>`,
		"fallback": "withicons-brutal:marigold",
	});
}

export default Component;
