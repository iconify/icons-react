import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d82ny2b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d82ny2b-f"/>`,
		"fallback": "streamline-logos:microsoft-onedrive-logo-2-block",
	});
}

export default Component;
