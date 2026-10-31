import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na34i4bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na34i4bqx"/>`,
		"fallback": "withicons:unlock-gloss",
	});
}

export default Component;
