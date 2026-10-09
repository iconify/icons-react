import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryya2cmsp.css';
import '../../css/m/mqlcs9bpx.css';
import '../../css/f/f_n_iqb4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryya2cmsp"/><path class="mqlcs9bpx"/><path class="f_n_iqb4s"/>`,
		"fallback": "energy-icons:log-in-48-bold",
	});
}

export default Component;
