import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykumliwdy.css';
import '../../css/k/k6ojw0b3k.css';
import '../../css/o/ozju5v66n.css';
import '../../css/s/s8zygmb6r.css';
import '../../css/v/vlrqudbzm.css';
import '../../css/m/mxit97eps.css';
import '../../css/l/lio3jo1op.css';
import '../../css/m/mw6kstb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow ykumliwdy"/><path class="k6ojw0b3k wm-k"/><path class="ozju5v66n wm-k"/><path class="s8zygmb6r wm-k"/><path class="vlrqudbzm wm-k"/><path class="mxit97eps wm-shine"/><path class="lio3jo1op wm-k"/><path class="mw6kstb5x wm-a"/>`,
		"fallback": "withicons-plush:square-terminal",
	});
}

export default Component;
