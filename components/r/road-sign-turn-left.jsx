import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7cu6ybyi.css';
import '../../css/l/l6my-gbot.css';
import '../../css/e/e_512mo-i.css';
import '../../css/x/x2jsareyn.css';
import '../../css/x/xfdtnnbqd.css';
import '../../css/j/jdk8mmbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7cu6ybyi"/><path class="l6my-gbot"/><path class="e_512mo-i"/><path class="x2jsareyn"/><path class="xfdtnnbqd"/><path class="jdk8mmbgs"/></g>`,
		"fallback": "streamline-ultimate-color:road-sign-turn-left",
	});
}

export default Component;
