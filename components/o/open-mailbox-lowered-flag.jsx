import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kayvkbc6l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kayvkbc6l"/>`,
		"fallback": "dinkie-icons:open-mailbox-lowered-flag",
	});
}

export default Component;
