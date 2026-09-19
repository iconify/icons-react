import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgr9gibqz.css';
import '../../css/t/t_dgsfbzs.css';
import '../../css/l/l9mjqacqk.css';
import '../../css/v/vroqjjbyf.css';
import '../../css/w/w2aku6b0k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgr9gibqz"/><path class="t_dgsfbzs"/><circle class="l9mjqacqk"/><circle class="vroqjjbyf"/><path class="w2aku6b0k"/>`,
		"fallback": "fxemoji:trackball",
	});
}

export default Component;
