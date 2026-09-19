import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6pd-lbze.css';
import '../../css/r/rr-fqzblh.css';
import '../../css/u/u4ilukxus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="q6pd-lbze"/><rect class="rr-fqzblh"/><rect class="u4ilukxus"/>`,
		"fallback": "boxicons:rows-3-filled",
	});
}

export default Component;
