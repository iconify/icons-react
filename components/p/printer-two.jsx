import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xsydfnbew.css';
import '../../css/o/o39sc1brf.css';
import '../../css/t/tp0tmxgkr.css';
import '../../css/d/d-jqf1bjs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xsydfnbew"/><rect class="o39sc1brf"/><path class="tp0tmxgkr"/><path class="d-jqf1bjs"/></g>`,
		"fallback": "icon-park-solid:printer-two",
	});
}

export default Component;
