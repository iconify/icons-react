import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/peso-2bmk.css';
import '../../css/y/yw94irbwu.css';
import '../../css/l/lm12yezwt.css';
import '../../css/k/ka_s_fbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="peso-2bmk"/><path class="yw94irbwu"/><path class="lm12yezwt"/><path class="ka_s_fbtx"/></g>`,
		"fallback": "streamline-cyber-color:reply-all",
	});
}

export default Component;
