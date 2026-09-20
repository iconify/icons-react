import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3n5-9bsl.css';
import '../../css/g/gp_8ugeyf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3n5-9bsl"/><path class="gp_8ugeyf"/></g>`,
		"fallback": "streamline-color:rss-symbol",
	});
}

export default Component;
