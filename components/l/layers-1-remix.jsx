import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4ab1wb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4ab1wb8b"/>`,
		"fallback": "streamline-sharp:layers-1-remix",
	});
}

export default Component;
