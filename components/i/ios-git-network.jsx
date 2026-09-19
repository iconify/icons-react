import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myq2e5yds.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myq2e5yds"/>`,
		"fallback": "ion:ios-git-network",
	});
}

export default Component;
