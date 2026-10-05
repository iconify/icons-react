import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xreczbeld.css';
import '../../css/s/s_o0tcy8i.css';
import '../../css/l/ladxk0btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xreczbeld"/><path class="s_o0tcy8i"/><path class="ladxk0btf"/></g>`,
		"fallback": "matita:log-out",
	});
}

export default Component;
