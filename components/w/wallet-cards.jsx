import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j-tdpxbhx.css';
import '../../css/o/oac2nqq5z.css';
import '../../css/x/xjhj-_vfa.css';
import '../../css/l/l8c3weu7g.css';
import '../../css/b/buyysmb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="j-tdpxbhx wm-shadow"/><path class="oac2nqq5z wm-shadow"/><path class="xjhj-_vfa"/><path class="l8c3weu7g"/><path class="buyysmb1r"/></g>`,
		"fallback": "withicons-brutal:wallet-cards",
	});
}

export default Component;
