import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfj8c45tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfj8c45tf"/>`,
		"fallback": "tabler:license-off",
	});
}

export default Component;
