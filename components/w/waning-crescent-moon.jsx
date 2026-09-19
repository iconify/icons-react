import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mefsfe89l.css';
import '../../css/b/bicx66-qx.css';
import '../../css/f/fdk-cs9fk.css';
import '../../css/a/a6gavzhdo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mefsfe89l"/><path class="bicx66-qx"/><path class="fdk-cs9fk"/><path class="a6gavzhdo"/></g>`,
		"fallback": "fluent-emoji-flat:waning-crescent-moon",
	});
}

export default Component;
