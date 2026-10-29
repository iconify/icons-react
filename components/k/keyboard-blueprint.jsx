import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/o5v6yuw3m.css';
import '../../css/a/ae-w54boi.css';
import '../../css/c/cd2d17stg.css';
import '../../css/n/nl8u9ehql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="o5v6yuw3m wm-deco"/><path class="ae-w54boi wm-deco"/><path class="cd2d17stg wm-k"/><path class="nl8u9ehql wm-a"/></g>`,
		"fallback": "withicons:keyboard-blueprint",
	});
}

export default Component;
