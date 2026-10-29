import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycko3m6rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycko3m6rg"/>`,
		"fallback": "lucide:swiss-franc",
	});
}

export default Component;
