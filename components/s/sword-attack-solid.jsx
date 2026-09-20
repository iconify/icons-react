import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vayc-0b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vayc-0b-b"/>`,
		"fallback": "streamline-sharp:sword-attack-solid",
	});
}

export default Component;
