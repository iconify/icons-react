import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy2ppg2ml.css';
import '../../css/x/xra4spkdz.css';
import '../../css/l/l6ji00b6j.css';
import '../../css/t/twg44jb8c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jy2ppg2ml"/><path class="xra4spkdz"/><path class="l6ji00b6j"/><path class="twg44jb8c"/></g>`,
		"fallback": "streamline-color:toast",
	});
}

export default Component;
