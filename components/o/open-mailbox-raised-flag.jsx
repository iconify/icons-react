import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns3mynbwd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns3mynbwd"/>`,
		"fallback": "dinkie-icons:open-mailbox-raised-flag",
	});
}

export default Component;
