import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c115sym6s.css';
import '../../css/u/up7jqh7ts.css';
import '../../css/u/u9s3z1b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c115sym6s"/><path class="up7jqh7ts"/><path class="u9s3z1b3c"/></g>`,
		"fallback": "streamline-ultimate-color:share",
	});
}

export default Component;
