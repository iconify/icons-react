import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5uu13kke.css';
import '../../css/n/n0lkqcvcw.css';
import '../../css/g/g45kn2b9r.css';
import '../../css/m/m62w0qbrw.css';
import '../../css/s/s7evhxbta.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/c/cnwgomljg.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/c/cz2umo-3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f5uu13kke"/><path class="n0lkqcvcw"/><path class="g45kn2b9r"/><path class="m62w0qbrw"/><path class="s7evhxbta"/><path class="ps7z7wb7n"/><path class="cnwgomljg"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="cz2umo-3n"/></g>`,
		"fallback": "fluent-emoji-flat:person-dark",
	});
}

export default Component;
