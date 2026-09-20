import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwr1d6buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwr1d6buo"/>`,
		"fallback": "tabler:new-section",
	});
}

export default Component;
