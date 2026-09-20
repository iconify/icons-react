import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckjv9dbko.css';
import '../../css/h/h35m5hcqe.css';
import '../../css/z/ztgnliu0b.css';
import '../../css/k/kd94m1b4e.css';
import '../../css/m/mdpqnwn5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckjv9dbko"/><path class="h35m5hcqe"/><path class="ztgnliu0b"/><path class="kd94m1b4e"/><path class="mdpqnwn5g"/>`,
		"fallback": "selfhst:undb",
	});
}

export default Component;
