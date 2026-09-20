import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2qmj7vmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m2qmj7vmu"/>`,
		"fallback": "streamline-sharp:roller-remix",
	});
}

export default Component;
