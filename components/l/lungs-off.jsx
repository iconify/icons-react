import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivg15v0kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivg15v0kb"/>`,
		"fallback": "tabler:lungs-off",
	});
}

export default Component;
