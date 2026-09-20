import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnr4hs01v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnr4hs01v"/>`,
		"fallback": "simple-icons:microsoftvisio",
	});
}

export default Component;
