import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdat6-bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mdat6-bec"/>`,
		"fallback": "streamline-logos:slide-share-logo-solid",
	});
}

export default Component;
