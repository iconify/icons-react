import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pw778mbpo.css';
import '../../css/n/n-fw9sbnf.css';
import '../../css/g/gqayovb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pw778mbpo"/><circle class="n-fw9sbnf"/><path class="gqayovb7b"/></g>`,
		"fallback": "hugeicons:metronome",
	});
}

export default Component;
