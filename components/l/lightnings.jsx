import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3zgc2n5n.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3zgc2n5n"/>`,
		"fallback": "fontisto:lightnings",
	});
}

export default Component;
