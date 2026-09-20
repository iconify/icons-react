import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gafqlvo9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gafqlvo9p"/>`,
		"fallback": "simple-icons:sketch",
	});
}

export default Component;
