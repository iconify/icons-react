import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8mi811tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8mi811tf"/>`,
		"fallback": "pixelarticons:trash-sharp",
	});
}

export default Component;
