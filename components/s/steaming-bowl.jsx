import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhoy7-5sk.css';
import '../../css/j/jpkjyebkd.css';
import '../../css/e/ei0zz1o8m.css';
import '../../css/i/iancleg1f.css';
import '../../css/b/besjhgb5c.css';
import '../../css/m/mr54lachc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vhoy7-5sk"/><path class="jpkjyebkd"/><path class="ei0zz1o8m"/><path class="iancleg1f"/><path class="besjhgb5c"/><path class="mr54lachc"/></g>`,
		"fallback": "fluent-emoji-flat:steaming-bowl",
	});
}

export default Component;
