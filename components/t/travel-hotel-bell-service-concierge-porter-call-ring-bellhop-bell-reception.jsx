import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-73ullsw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-73ullsw"/>`,
		"fallback": "streamline:travel-hotel-bell-service-concierge-porter-call-ring-bellhop-bell-reception",
	});
}

export default Component;
