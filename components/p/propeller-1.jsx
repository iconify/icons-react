import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kht4czj5f.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kht4czj5f"/>`,
		"fallback": "fontisto:propeller-1",
	});
}

export default Component;
