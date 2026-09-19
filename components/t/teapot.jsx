import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0mumgb8o.css';
import '../../css/a/axd8_h6yq.css';
import '../../css/o/o44__fb5d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w0mumgb8o"/><path class="axd8_h6yq"/><path class="o44__fb5d"/></g>`,
		"fallback": "fluent-emoji-flat:teapot",
	});
}

export default Component;
