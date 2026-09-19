import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rev1gzb0u.css';
import '../../css/e/etgq1od9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rev1gzb0u"/><path class="etgq1od9i"/>`,
		"fallback": "fxemoji:mouth",
	});
}

export default Component;
