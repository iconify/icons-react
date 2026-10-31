import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr0bi7biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr0bi7biw"/>`,
		"fallback": "withicons:red-lantern-gloss",
	});
}

export default Component;
