import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s67p0lbyo.css';
import '../../css/q/qaju06b4u.css';
import '../../css/f/fj3dpvtys.css';
import '../../css/b/befc19ham.css';
import '../../css/s/s1h3pcc1w.css';
import '../../css/h/h-ezxgu7h.css';
import '../../css/o/oxjklwcoh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s67p0lbyo"/><path class="qaju06b4u"/><path class="fj3dpvtys"/><path class="befc19ham"/><path class="s1h3pcc1w"/><path class="h-ezxgu7h"/><path class="oxjklwcoh"/></g>`,
		"fallback": "fluent-emoji-flat:teddy-bear",
	});
}

export default Component;
