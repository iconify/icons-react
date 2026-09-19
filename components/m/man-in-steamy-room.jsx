import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvbspp7nc.css';
import '../../css/z/zirfm5w_h.css';
import '../../css/e/eg7t2lx5y.css';
import '../../css/n/nn-_vitmv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvbspp7nc"/><path class="zirfm5w_h"/><path class="eg7t2lx5y"/><path class="nn-_vitmv"/>`,
		"fallback": "fluent-emoji-high-contrast:man-in-steamy-room",
	});
}

export default Component;
