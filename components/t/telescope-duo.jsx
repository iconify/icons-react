import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/q/qs--27sog.css';
import '../../css/g/giymj9btx.css';
import '../../css/a/adu5pvlll.css';
import '../../css/h/h7uox1b4n.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="qs--27sog"/><path class="giymj9btx"/><path class="adu5pvlll"/><path class="h7uox1b4n"/></g>`,
		"fallback": "streamline-stickies-color:telescope-duo",
	});
}

export default Component;
