import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6m7u3bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6m7u3bhv"/>`,
		"fallback": "noviair-light:motorbike",
	});
}

export default Component;
