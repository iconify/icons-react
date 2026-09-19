import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0j6xezsr.css';
import '../../css/p/ppbx5znva.css';
import '../../css/f/fpo7c3bbj.css';
import '../../css/m/m62w0qbrw.css';
import '../../css/s/s7evhxbta.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/c/cnwgomljg.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/x/xcjq4ibxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0j6xezsr"/><path class="ppbx5znva"/><path class="fpo7c3bbj"/><path class="m62w0qbrw"/><path class="s7evhxbta"/><path class="ps7z7wb7n"/><path class="cnwgomljg"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="xcjq4ibxl"/></g>`,
		"fallback": "fluent-emoji-flat:man-dark",
	});
}

export default Component;
