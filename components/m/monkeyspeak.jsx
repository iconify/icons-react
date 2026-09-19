import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-7k1pbwv.css';
import '../../css/j/j6k-r874l.css';
import '../../css/q/q537fcb9h.css';
import '../../css/i/ic9tutawl.css';
import '../../css/r/rje9mkb_v.css';
import '../../css/o/o0mniabdz.css';
import '../../css/m/m4870yhns.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-7k1pbwv"/><path class="j6k-r874l"/><path class="q537fcb9h"/><path class="ic9tutawl"/><path class="rje9mkb_v"/><path class="o0mniabdz"/><path class="m4870yhns"/>`,
		"fallback": "fxemoji:monkeyspeak",
	});
}

export default Component;
