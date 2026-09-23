import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bbimr5y_f.css';
import '../../css/j/j7hk7zb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bbimr5y_f"/><path class="j7hk7zb0t"/></g>`,
		"fallback": "keyline-icons:sliders-horizontal-sparkles",
	});
}

export default Component;
