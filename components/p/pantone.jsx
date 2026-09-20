import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sgtrhfkvg.css';
import '../../css/s/sri2uibjc.css';
import '../../css/o/og4f_ccrw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="sgtrhfkvg"/><path class="sri2uibjc"/><path class="og4f_ccrw"/></g>`,
		"fallback": "marketeq:pantone",
	});
}

export default Component;
