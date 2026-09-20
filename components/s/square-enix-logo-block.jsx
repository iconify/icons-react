import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pytm-kb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pytm-kb6f"/>`,
		"fallback": "streamline-logos:square-enix-logo-block",
	});
}

export default Component;
