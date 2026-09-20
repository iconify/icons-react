import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0hmkxdku.css';
import '../../css/x/x3768wg5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0hmkxdku"/><path class="x3768wg5y"/>`,
		"fallback": "octicon:octoface-24",
	});
}

export default Component;
