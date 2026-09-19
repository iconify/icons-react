import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7607mb-l.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7607mb-l"/>`,
		"fallback": "fa6-solid:less-than",
	});
}

export default Component;
