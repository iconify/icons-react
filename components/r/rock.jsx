import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv8hz2bsh.css';
import '../../css/n/nvgltsf2v.css';
import '../../css/q/q6qup4tjo.css';
import '../../css/e/eaf5jy6ac.css';
import '../../css/e/e4e7p17-v.css';
import '../../css/a/apsorsbwi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dv8hz2bsh"/><path class="nvgltsf2v"/><path class="q6qup4tjo"/><path class="eaf5jy6ac"/><path class="e4e7p17-v"/><path class="apsorsbwi"/></g>`,
		"fallback": "fluent-emoji-flat:rock",
	});
}

export default Component;
