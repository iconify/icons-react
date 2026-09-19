import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqc0s_98y.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqc0s_98y"/>`,
		"fallback": "fontisto:plane",
	});
}

export default Component;
