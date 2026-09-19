import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2li7-bjp.css';
import '../../css/i/iohbeo7da.css';
import '../../css/h/hqzh9-bno.css';
import '../../css/r/rgy-3x2rx.css';
import '../../css/x/xd1ptjzsj.css';
import '../../css/m/myjxigb9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2li7-bjp"/><path class="iohbeo7da"/><path class="hqzh9-bno"/><path class="rgy-3x2rx"/><path class="xd1ptjzsj"/><path class="myjxigb9d"/>`,
		"fallback": "fxemoji:pig",
	});
}

export default Component;
