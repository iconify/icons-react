import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axib82bqt.css';
import '../../css/j/j7xxlgkvy.css';
import '../../css/e/e8571ebzs.css';
import '../../css/s/sp43tve6w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="axib82bqt"/><path class="j7xxlgkvy"/><path class="e8571ebzs"/><path class="sp43tve6w"/></g>`,
		"fallback": "streamline-color:shredder",
	});
}

export default Component;
