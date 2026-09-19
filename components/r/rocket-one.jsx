import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/j/j_ho0ubvu.css';
import '../../css/n/nlre1t85d.css';
import '../../css/t/tn8lj6nzi.css';
import '../../css/b/bruurubxj.css';
import '../../css/h/h46ej-b8a.css';
import '../../css/r/rfzb_jn9t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="j_ho0ubvu"/><circle class="nlre1t85d"/><path class="tn8lj6nzi"/><path class="bruurubxj"/><path class="h46ej-b8a"/><path class="rfzb_jn9t"/></g>`,
		"fallback": "icon-park:rocket-one",
	});
}

export default Component;
