import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/oto7iqo1e.css';
import '../../css/o/oupjr30cu.css';
import '../../css/u/ug-g1ubih.css';
import '../../css/f/fz2woib5m.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="oto7iqo1e"/><path class="oupjr30cu wm-shine"/><path class="ug-g1ubih wm-k"/><path class="fz2woib5m wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:shopping-basket",
	});
}

export default Component;
