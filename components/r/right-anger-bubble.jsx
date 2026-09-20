import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/h6u3qrorb.css';
import '../../css/l/l36f9pfhl.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/d/dnqep7btc.css';
import '../../css/w/wy1oeubfr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="h6u3qrorb"/><path class="l36f9pfhl"/></g><g class="rpvb-o6bq"><path class="dnqep7btc"/><path class="wy1oeubfr"/></g>`,
		"fallback": "openmoji:right-anger-bubble",
	});
}

export default Component;
