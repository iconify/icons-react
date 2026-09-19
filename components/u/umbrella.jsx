import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6y-4j39f.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6y-4j39f"/>`,
		"fallback": "fontisto:umbrella",
	});
}

export default Component;
