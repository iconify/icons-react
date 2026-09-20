import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7lp3gbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7lp3gbpk"/>`,
		"fallback": "majesticons:settings-cog-plus",
	});
}

export default Component;
