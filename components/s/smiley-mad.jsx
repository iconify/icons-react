import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2up0z4wt.css';
import '../../css/b/b43wj-bqg.css';
import '../../css/j/jzrkcbz0u.css';
import '../../css/l/li-k4356h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2up0z4wt"/><path class="b43wj-bqg"/><path class="jzrkcbz0u"/><path class="li-k4356h"/></g>`,
		"fallback": "streamline-ultimate-color:smiley-mad",
	});
}

export default Component;
