import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emq9xhbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emq9xhbfq"/>`,
		"fallback": "streamline-sharp:moon-cloud-remix",
	});
}

export default Component;
