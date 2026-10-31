import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6qg4zccu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6qg4zccu"/>`,
		"fallback": "coolicons:megaphone-round",
	});
}

export default Component;
