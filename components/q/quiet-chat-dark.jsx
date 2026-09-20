import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpt-vi5dt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpt-vi5dt"/>`,
		"fallback": "selfhst:quiet-chat-dark",
	});
}

export default Component;
