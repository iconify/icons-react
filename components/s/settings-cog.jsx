import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrk8oezcx.css';
import '../../css/j/jfzv-bb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hrk8oezcx"/><path class="jfzv-bb7z"/></g>`,
		"fallback": "streamline-freehand-color:settings-cog",
	});
}

export default Component;
