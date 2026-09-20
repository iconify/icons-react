import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bawdkac8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bawdkac8m"/>`,
		"fallback": "octicon:sort-desc-24",
	});
}

export default Component;
