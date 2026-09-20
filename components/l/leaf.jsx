import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj0jmcbek.css';
import '../../css/r/r9q98mbhp.css';
import '../../css/b/b5c6v2bhg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dj0jmcbek"/><path class="r9q98mbhp"/><path class="b5c6v2bhg"/></g>`,
		"fallback": "streamline-color:leaf",
	});
}

export default Component;
