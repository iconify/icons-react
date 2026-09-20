import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueot0884u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ueot0884u"/>`,
		"fallback": "streamline-sharp:skype-logo-remix",
	});
}

export default Component;
