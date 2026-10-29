import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pm89hh4er.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/j/jgka1gbzk.css';
import '../../css/v/vhcfjabbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="pm89hh4er wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="jgka1gbzk wm-k"/><path class="vhcfjabbb wm-a"/></g>`,
		"fallback": "withicons:pill-bottle-blueprint",
	});
}

export default Component;
