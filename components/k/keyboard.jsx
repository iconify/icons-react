import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9kh4nuhd.css';
import '../../css/r/r1betob-g.css';
import '../../css/d/dc5_tpftu.css';
import '../../css/k/krf9a9lju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9kh4nuhd"/><path class="r1betob-g"/><path class="dc5_tpftu"/><path class="krf9a9lju"/></g>`,
		"fallback": "streamline-ultimate-color:keyboard",
	});
}

export default Component;
