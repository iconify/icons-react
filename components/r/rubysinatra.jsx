import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnw475f6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnw475f6l"/>`,
		"fallback": "simple-icons:rubysinatra",
	});
}

export default Component;
