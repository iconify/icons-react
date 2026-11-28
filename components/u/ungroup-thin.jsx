import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dohcaub8a.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dohcaub8a"/>`,
		"fallback": "pullo:ungroup-thin",
	});
}

export default Component;
