import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfa0-4b6y.css';
import '../../css/c/cnlo7envd.css';
import '../../css/i/itaruw4dj.css';
import '../../css/x/xede9xb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfa0-4b6y"/><path class="cnlo7envd"/><path class="itaruw4dj"/><path class="xede9xb6i"/></g>`,
		"fallback": "tdesign:radio-1",
	});
}

export default Component;
