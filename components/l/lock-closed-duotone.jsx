import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwloscb6d.css';
import '../../css/t/tn4b2zsid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwloscb6d"/><path class="tn4b2zsid"/>`,
		"fallback": "stash:lock-closed-duotone",
	});
}

export default Component;
