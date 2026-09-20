import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icnj0w2vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icnj0w2vc"/>`,
		"fallback": "streamline-ultimate:single-woman",
	});
}

export default Component;
