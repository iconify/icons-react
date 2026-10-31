import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g3yf6qbfk.css';
import '../../css/u/u_593pbjs.css';
import '../../css/n/n05tv19cf.css';
import '../../css/f/f2pkwd46q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="g3yf6qbfk wm-shadow"/><path class="u_593pbjs wm-shadow"/><path class="n05tv19cf"/><path class="f2pkwd46q"/></g>`,
		"fallback": "withicons-brutal:rotate-ccw",
	});
}

export default Component;
