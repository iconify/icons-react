import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7gi09b7p.css';
import '../../css/i/i93jdftas.css';
import '../../css/c/c6-sq8xgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7gi09b7p"/><path class="i93jdftas"/><path class="c6-sq8xgm"/>`,
		"fallback": "octicon:release-24",
	});
}

export default Component;
