import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpk9reb7v.css';
import '../../css/b/bovhvxb0p.css';
import '../../css/e/e4hrikb9z.css';
import '../../css/l/lf337lxxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vpk9reb7v"/><path class="bovhvxb0p"/><path class="e4hrikb9z"/><path class="lf337lxxo"/></g>`,
		"fallback": "streamline-cyber-color:newspaper-2",
	});
}

export default Component;
