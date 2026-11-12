import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc9_9gp3w.css';
import '../../css/c/cqrepab2x.css';
import '../../css/y/yd6ryz9vi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc9_9gp3w"/><path class="cqrepab2x"/><path class="yd6ryz9vi"/>`,
		"fallback": "selfhst:mediamanager",
	});
}

export default Component;
