import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwlarub2p.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwlarub2p"/>`,
		"fallback": "ps:open-padlock",
	});
}

export default Component;
