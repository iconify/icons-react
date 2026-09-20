import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gor4ayb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gor4ayb7t"/>`,
		"fallback": "streamline-sharp:signal-full-remix",
	});
}

export default Component;
