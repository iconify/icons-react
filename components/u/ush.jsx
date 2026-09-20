import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rls8tbyvi.css';
import '../../css/s/stb4woxho.css';
import '../../css/r/rgsjgwd_l.css';
import '../../css/t/t2_lzowru.css';
import '../../css/j/ju0evpb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rls8tbyvi"/><path class="stb4woxho"/><path class="rgsjgwd_l"/><path class="t2_lzowru"/><path class="ju0evpb8n"/>`,
		"fallback": "token:ush",
	});
}

export default Component;
