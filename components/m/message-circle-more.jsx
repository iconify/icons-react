import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhcuh2eux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhcuh2eux"/>`,
		"fallback": "lucide:message-circle-more",
	});
}

export default Component;
