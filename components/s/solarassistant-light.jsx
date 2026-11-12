import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd2317bpb.css';
import '../../css/d/dd62ynr7u.css';
import '../../css/q/qd-usjb9k.css';
import '../../css/e/efa-oubof.css';
import '../../css/c/cxjwkwbqh.css';
import '../../css/b/bh4vtcb8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd2317bpb"/><path class="dd62ynr7u"/><path class="qd-usjb9k"/><path class="efa-oubof"/><path class="cxjwkwbqh"/><path class="bh4vtcb8h"/>`,
		"fallback": "selfhst:solarassistant-light",
	});
}

export default Component;
