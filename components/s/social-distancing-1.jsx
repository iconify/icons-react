import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wegdsqxjp.css';
import '../../css/r/r9y0yfbrb.css';
import '../../css/b/b3kgo03hw.css';
import '../../css/c/c2rcj8lti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wegdsqxjp"/><path class="r9y0yfbrb"/><path class="b3kgo03hw"/><path class="c2rcj8lti"/></g>`,
		"fallback": "covid:social-distancing-1",
	});
}

export default Component;
