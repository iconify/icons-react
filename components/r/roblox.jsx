import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmevz-btj.css';
import '../../css/o/oynab6bpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmevz-btj"/><path class="oynab6bpl"/>`,
		"fallback": "selfhst:roblox",
	});
}

export default Component;
