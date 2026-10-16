import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb70seb8t.css';
import '../../css/v/vt3q5aclv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb70seb8t"/><path class="vt3q5aclv"/>`,
		"fallback": "energy-icons:sticker-48",
	});
}

export default Component;
