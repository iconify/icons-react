import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc2h1t7kb.css';
import '../../css/w/watacqxif.css';
import '../../css/y/yb4htytdh.css';
import '../../css/m/mf06j8blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hc2h1t7kb"/><path class="watacqxif"/><path class="yb4htytdh"/><path class="mf06j8blc"/></g>`,
		"fallback": "streamline-ultimate-color:office-business-card",
	});
}

export default Component;
