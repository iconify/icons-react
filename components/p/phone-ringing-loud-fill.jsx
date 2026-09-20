import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9vdhzb3o.css';
import '../../css/h/hdpb60b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9vdhzb3o"/><path class="hdpb60b1b"/>`,
		"fallback": "mage:phone-ringing-loud-fill",
	});
}

export default Component;
