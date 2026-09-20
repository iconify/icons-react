import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y09gvdb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y09gvdb5p"/>`,
		"fallback": "streamline-sharp:syringe",
	});
}

export default Component;
