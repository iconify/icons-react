import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz9-8bbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz9-8bbyk"/>`,
		"fallback": "noviair:rewind",
	});
}

export default Component;
