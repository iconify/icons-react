import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cf9hc0bbb.css';
import '../../css/l/le343eqle.css';
import '../../css/p/p_sbqi78u.css';
import '../../css/p/pjarycbkg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cf9hc0bbb"/><path class="le343eqle"/><path class="p_sbqi78u"/><path class="pjarycbkg"/></g>`,
		"fallback": "healthicons:spine-outline",
	});
}

export default Component;
