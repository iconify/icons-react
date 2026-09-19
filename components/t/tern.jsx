import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qldn_o-ft.css';
import '../../css/x/xmbdhob-g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qldn_o-ft"/><path class="xmbdhob-g"/></g>`,
		"fallback": "cryptocurrency-color:tern",
	});
}

export default Component;
