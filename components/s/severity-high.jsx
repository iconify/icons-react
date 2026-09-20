import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-t4epb5p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-t4epb5p"/>`,
		"fallback": "pajamas:severity-high",
	});
}

export default Component;
