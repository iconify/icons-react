import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvwrcqbgi.css';
import '../../css/y/yx387rbsc.css';
import '../../css/x/xaw-yebiu.css';
import '../../css/q/q_pzcfghs.css';
import '../../css/y/y7nvc_bze.css';
import '../../css/l/lsaiprb4y.css';
import '../../css/w/w5i_3chrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvwrcqbgi"/><path class="yx387rbsc"/><path class="xaw-yebiu"/><path class="q_pzcfghs"/><path class="y7nvc_bze"/><path class="lsaiprb4y"/><path class="w5i_3chrg"/>`,
		"fallback": "uim:object-ungroup",
	});
}

export default Component;
