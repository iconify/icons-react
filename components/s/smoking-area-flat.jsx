import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qejnf7b9o.css';
import '../../css/g/g2ez3_b3e.css';
import '../../css/h/he5v6zbbo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qejnf7b9o"/><path class="g2ez3_b3e"/><path class="he5v6zbbo"/></g>`,
		"fallback": "streamline-color:smoking-area-flat",
	});
}

export default Component;
