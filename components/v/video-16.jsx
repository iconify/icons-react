import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic8i36t6o.css';
import '../../css/o/o1kf6m42c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic8i36t6o"/><path class="o1kf6m42c"/>`,
		"fallback": "octicon:video-16",
	});
}

export default Component;
