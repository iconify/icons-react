import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdzt5t5un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdzt5t5un"/>`,
		"fallback": "streamline-sharp:location-office-remix",
	});
}

export default Component;
