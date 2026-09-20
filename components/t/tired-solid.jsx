import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si-73mbtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si-73mbtv"/>`,
		"fallback": "la:tired-solid",
	});
}

export default Component;
