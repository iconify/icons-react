import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8dcblb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8dcblb-p"/>`,
		"fallback": "mdi:mobile-phone-dock",
	});
}

export default Component;
