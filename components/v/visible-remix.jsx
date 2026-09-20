import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv-x43eqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zv-x43eqs"/>`,
		"fallback": "streamline-sharp:visible-remix",
	});
}

export default Component;
