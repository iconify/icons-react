import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j0mppdb_k.css';
import '../../css/i/iylvp5bht.css';
import '../../css/c/cjpys8beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j0mppdb_k"/><path class="iylvp5bht"/><path class="cjpys8beh"/></g>`,
		"fallback": "keyline-icons:square-navigation-sharp-two-tone",
	});
}

export default Component;
