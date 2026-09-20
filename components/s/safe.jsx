import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sluqg8b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sluqg8b0h"/>`,
		"fallback": "reicon:safe",
	});
}

export default Component;
