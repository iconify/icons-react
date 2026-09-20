import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7wlhvbfe.css';
import '../../css/r/rgmixhqtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7wlhvbfe"/><path class="rgmixhqtl"/>`,
		"fallback": "stash:pack-duotone",
	});
}

export default Component;
