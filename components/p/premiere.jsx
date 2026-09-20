import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aj3s01fkv.css';
import '../../css/b/b5d385b0q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="aj3s01fkv"/><path class="b5d385b0q"/></g>`,
		"fallback": "skill-icons:premiere",
	});
}

export default Component;
