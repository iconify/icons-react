import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgzwr9b4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgzwr9b4f"/>`,
		"fallback": "noviair:password-x",
	});
}

export default Component;
