import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu45fqbfk.css';
import '../../css/p/p219-yklg.css';
import '../../css/x/xodi2sb0c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zu45fqbfk"/><path class="p219-yklg"/><path class="xodi2sb0c"/></g>`,
		"fallback": "fluent-emoji-flat:sauropod",
	});
}

export default Component;
