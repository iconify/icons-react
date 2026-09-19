import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwbh7nbys.css';
import '../../css/z/zbgf9zo9k.css';
import '../../css/d/dfp9on1-c.css';
import '../../css/b/blnr7rb1l.css';
import '../../css/w/w4cknsjdm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwbh7nbys"/><path class="zbgf9zo9k"/><path class="dfp9on1-c"/><path class="blnr7rb1l"/><path class="w4cknsjdm"/>`,
		"fallback": "devicon:tauri-wordmark",
	});
}

export default Component;
