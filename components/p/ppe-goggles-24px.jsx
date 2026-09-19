import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alc589sng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="alc589sng"/>`,
		"fallback": "healthicons:ppe-goggles-24px",
	});
}

export default Component;
