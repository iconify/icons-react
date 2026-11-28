import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oov89x65i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oov89x65i"/>`,
		"fallback": "noviair:lungs",
	});
}

export default Component;
