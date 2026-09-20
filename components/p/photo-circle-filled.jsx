import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/k/kelkkobbo.css';
import '../../css/f/fi_-pccws.css';
import '../../css/e/e-yamx98d.css';
import '../../css/a/a5mim-b8p.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="kelkkobbo"/><path class="fi_-pccws"/><path clip-rule="evenodd" class="e-yamx98d"/><path clip-rule="evenodd" class="a5mim-b8p"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:photo-circle-filled",
	});
}

export default Component;
