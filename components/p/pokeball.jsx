import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xizny_agv.css';
import '../../css/w/wu61q28tf.css';
import '../../css/e/elf37db7r.css';
import '../../css/l/l5h--x1wk.css';
import '../../css/j/je7zwnsrq.css';
import '../../css/a/al8739-jv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xizny_agv"/><path class="wu61q28tf"/><path class="elf37db7r"/><path class="l5h--x1wk"/><path class="je7zwnsrq"/><path class="al8739-jv"/></g>`,
		"fallback": "streamline-cyber-color:pokeball",
	});
}

export default Component;
