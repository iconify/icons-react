import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq5bz1lno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eq5bz1lno"/>`,
		"fallback": "streamline-sharp:ship-remix",
	});
}

export default Component;
