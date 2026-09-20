import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q69f2svbj.css';
import '../../css/t/tvkje7yvq.css';
import '../../css/c/cznv7mb2h.css';
import '../../css/g/ggvr77bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q69f2svbj"/><path class="tvkje7yvq"/><path class="cznv7mb2h"/><path class="ggvr77bww"/></g>`,
		"fallback": "streamline-ultimate-color:monitor-heart-beat-search",
	});
}

export default Component;
