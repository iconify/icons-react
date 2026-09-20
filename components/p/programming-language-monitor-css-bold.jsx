import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wclz1cc_c.css';
import '../../css/c/czevaumet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wclz1cc_c"/><path class="czevaumet"/>`,
		"fallback": "streamline-ultimate:programming-language-monitor-css-bold",
	});
}

export default Component;
