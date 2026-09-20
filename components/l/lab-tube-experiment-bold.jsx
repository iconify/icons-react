import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez79efb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez79efb6f"/>`,
		"fallback": "streamline-ultimate:lab-tube-experiment-bold",
	});
}

export default Component;
