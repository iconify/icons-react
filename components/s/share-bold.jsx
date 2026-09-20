import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-02zybhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-02zybhj"/>`,
		"fallback": "streamline-ultimate:share-bold",
	});
}

export default Component;
