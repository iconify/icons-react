import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tep27sb8q.css';
import '../../css/u/u216tvloc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tep27sb8q"/><path class="u216tvloc"/></g>`,
		"fallback": "tdesign:logo-facebook",
	});
}

export default Component;
