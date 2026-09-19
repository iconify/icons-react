import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/s/s-8_facdk.css';
import '../../css/m/m0v40n6wf.css';
import '../../css/d/duzg3-npv.css';
import '../../css/m/m0hl1rncr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="s-8_facdk"/><path class="m0v40n6wf"/><circle class="duzg3-npv"/><path class="m0hl1rncr"/></g>`,
		"fallback": "icon-park:people-search-one",
	});
}

export default Component;
