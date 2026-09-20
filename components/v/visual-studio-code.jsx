import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i57v3jbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i57v3jbvl"/>`,
		"fallback": "proicons:visual-studio-code",
	});
}

export default Component;
