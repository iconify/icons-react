import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg8eb8y-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg8eb8y-f"/>`,
		"fallback": "mdi:invoice-fast",
	});
}

export default Component;
