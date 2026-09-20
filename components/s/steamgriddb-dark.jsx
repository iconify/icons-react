import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbqqh1vfg.css';
import '../../css/h/hu-59pbvb.css';
import '../../css/b/bt_2dwbxx.css';
import '../../css/d/dzpo8zb_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbqqh1vfg"/><path class="hu-59pbvb"/><path class="bt_2dwbxx"/><path class="dzpo8zb_v"/>`,
		"fallback": "selfhst:steamgriddb-dark",
	});
}

export default Component;
