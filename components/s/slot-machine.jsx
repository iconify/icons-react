import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcjj5zbpo.css';
import '../../css/r/ro3bxvk-v.css';
import '../../css/j/j9oe6_bdp.css';
import '../../css/m/mghbt-bnk.css';
import '../../css/e/ehjdqibzn.css';
import '../../css/e/e7m3igbsh.css';
import '../../css/o/o5nspybco.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xcjj5zbpo"/><path class="ro3bxvk-v"/><path class="j9oe6_bdp"/><path class="mghbt-bnk"/><path class="ehjdqibzn"/><path class="e7m3igbsh"/><path class="o5nspybco"/></g>`,
		"fallback": "fluent-emoji-flat:slot-machine",
	});
}

export default Component;
