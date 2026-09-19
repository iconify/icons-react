import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/giovjbbkt.css';
import '../../css/s/sechs05ci.css';
import '../../css/l/lci9jw8ac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="giovjbbkt"/><path class="sechs05ci"/><path class="lci9jw8ac"/></g>`,
		"fallback": "icon-park-outline:leaves-one",
	});
}

export default Component;
