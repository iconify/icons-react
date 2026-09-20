import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbupky64l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbupky64l"/>`,
		"fallback": "mdi:table-cog",
	});
}

export default Component;
