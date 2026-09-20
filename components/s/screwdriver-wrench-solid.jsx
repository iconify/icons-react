import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q394wmbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q394wmbbc"/>`,
		"fallback": "streamline-sharp:screwdriver-wrench-solid",
	});
}

export default Component;
