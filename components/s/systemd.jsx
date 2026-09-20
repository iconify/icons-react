import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3g7qk_6v.css';
import '../../css/q/q9xt_ac5x.css';
import '../../css/r/rj_fo2b2d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3g7qk_6v"/><circle class="q9xt_ac5x"/><path class="rj_fo2b2d"/>`,
		"fallback": "material-icon-theme:systemd",
	});
}

export default Component;
