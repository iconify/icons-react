import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/js99oebrf.css';
import '../../css/r/rz6frnslz.css';
import '../../css/i/i7udtsooe.css';
import '../../css/q/qegdji1er.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="js99oebrf"/><path class="rz6frnslz"/><path class="i7udtsooe"/><path class="qegdji1er"/></g>`,
		"fallback": "healthicons:pills-3-outline",
	});
}

export default Component;
