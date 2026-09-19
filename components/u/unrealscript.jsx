import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niwz-lbqb.css';
import '../../css/b/buiu9ebyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niwz-lbqb"/><path class="buiu9ebyw"/>`,
		"fallback": "file-icons:unrealscript",
	});
}

export default Component;
