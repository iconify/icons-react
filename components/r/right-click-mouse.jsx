import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i9we3cbvi.css';
import '../../css/x/xcnaicqhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i9we3cbvi"/><path class="xcnaicqhd"/></g>`,
		"fallback": "streamline-ultimate:right-click-mouse",
	});
}

export default Component;
