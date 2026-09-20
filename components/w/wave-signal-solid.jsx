import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhcbl6bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vhcbl6bom"/>`,
		"fallback": "streamline-sharp:wave-signal-solid",
	});
}

export default Component;
