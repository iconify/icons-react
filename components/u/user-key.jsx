import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2avflxus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2avflxus"/>`,
		"fallback": "tabler:user-key",
	});
}

export default Component;
