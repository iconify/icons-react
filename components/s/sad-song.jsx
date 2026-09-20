import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9rin0k7m.css';
import '../../css/h/h5p37ac0l.css';
import '../../css/f/f26472bmr.css';
import '../../css/t/tam0mqgff.css';
import '../../css/k/kqvlgvbmy.css';
import '../../css/q/q2j5wwxfe.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9rin0k7m"/><path class="h5p37ac0l"/><path class="f26472bmr"/><path class="tam0mqgff"/><path class="kqvlgvbmy"/><path class="q2j5wwxfe"/></g>`,
		"fallback": "streamline-stickies-color:sad-song",
	});
}

export default Component;
