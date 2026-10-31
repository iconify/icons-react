import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lzktixi6u.css';
import '../../css/a/a0w1p2bhg.css';
import '../../css/j/jhgclgbua.css';
import '../../css/u/uyc4ssfot.css';
import '../../css/v/vp46a0b9f.css';
import '../../css/y/yzx76tbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lzktixi6u wm-shadow"/><path class="a0w1p2bhg wm-shadow"/><path class="jhgclgbua"/><path class="uyc4ssfot"/><path class="vp46a0b9f"/><path class="yzx76tbpm"/></g>`,
		"fallback": "withicons-brutal:milk",
	});
}

export default Component;
