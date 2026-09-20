import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la6i2f31y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la6i2f31y"/>`,
		"fallback": "tabler:play-card-q-filled",
	});
}

export default Component;
