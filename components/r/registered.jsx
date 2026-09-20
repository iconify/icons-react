import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_weg3b7j.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/n/n9lhdyzbg.css';
import '../../css/w/wcwvfmbxf.css';
import '../../css/e/evlewacnw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j_weg3b7j"/><g class="rpvb-o6bq"><path clip-rule="evenodd" class="n9lhdyzbg"/><circle class="wcwvfmbxf"/><path clip-rule="evenodd" class="evlewacnw"/></g>`,
		"fallback": "openmoji:registered",
	});
}

export default Component;
