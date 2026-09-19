import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/ble6zil6f.css';
import '../../css/c/ci3cjlbtq.css';
import '../../css/q/qaswhccgj.css';
import '../../css/m/mimybo5-r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ble6zil6f"/><path class="ci3cjlbtq"/><path class="qaswhccgj"/><path class="mimybo5-r"/></g>`,
		"fallback": "glyphs-poly:timer-2",
	});
}

export default Component;
