import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ohqn92bep.css';
import '../../css/u/uku91dbsx.css';
import '../../css/v/v-2w818av.css';
import '../../css/j/jgka1gbzk.css';
import '../../css/q/q5w1fnujt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ohqn92bep"/><path class="uku91dbsx wm-a"/><path class="v-2w818av wm-a"/><path class="jgka1gbzk"/><path class="q5w1fnujt wm-a"/></g>`,
		"fallback": "withicons:pill-bottle-duo",
	});
}

export default Component;
