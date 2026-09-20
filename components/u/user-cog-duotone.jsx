import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6yhmq1dy.css';
import '../../css/b/bc3db-fby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6yhmq1dy"/><path class="bc3db-fby"/>`,
		"fallback": "stash:user-cog-duotone",
	});
}

export default Component;
