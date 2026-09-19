import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6ilqbb1w.css';
import '../../css/q/qlpwkbctq.css';
import '../../css/c/ca79ulb_a.css';
import '../../css/t/tq_gmsbqd.css';
import '../../css/z/z6q2bfbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6ilqbb1w"/><path class="qlpwkbctq"/><path class="ca79ulb_a"/><path class="tq_gmsbqd"/><path class="z6q2bfbwt"/>`,
		"fallback": "boxicons:rainbow-half",
	});
}

export default Component;
