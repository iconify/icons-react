import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vl5-qwbrw.css';
import '../../css/t/tb5fxeb-w.css';
import '../../css/a/ah4s37bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vl5-qwbrw"/><path class="tb5fxeb-w"/><path class="ah4s37bgk"/></g>`,
		"fallback": "keyline-icons:test-tubes-sharp-duotone",
	});
}

export default Component;
