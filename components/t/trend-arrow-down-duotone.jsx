import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tffhiiorp.css';
import '../../css/z/z9jk2sgfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tffhiiorp"/><path class="z9jk2sgfo"/>`,
		"fallback": "stash:trend-arrow-down-duotone",
	});
}

export default Component;
