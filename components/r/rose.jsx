import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln-a6_h5f.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln-a6_h5f"/>`,
		"fallback": "vs:rose",
	});
}

export default Component;
