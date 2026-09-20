import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ga3b3ijty.css';
import '../../css/v/vn993tbah.css';
import '../../css/r/r7fsfvpov.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ga3b3ijty"/><path clip-rule="evenodd" class="vn993tbah"/><path clip-rule="evenodd" class="r7fsfvpov"/></g>`,
		"fallback": "skill-icons:unrealengine",
	});
}

export default Component;
