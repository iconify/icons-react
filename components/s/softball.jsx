import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d455gnbrv.css';
import '../../css/n/n8t_iia7t.css';
import '../../css/f/fsevodr8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d455gnbrv"/><path class="n8t_iia7t"/><path class="fsevodr8c"/></g>`,
		"fallback": "fluent-emoji-flat:softball",
	});
}

export default Component;
