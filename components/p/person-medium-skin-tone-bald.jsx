import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr55bhbhf.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/q/qrwhk6b5f.css';
import '../../css/l/l4css97ah.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="rr55bhbhf"/><path class="amn_b-_3e"/><path class="qrwhk6b5f"/><path class="l4css97ah"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/>`,
		"fallback": "openmoji:person-medium-skin-tone-bald",
	});
}

export default Component;
