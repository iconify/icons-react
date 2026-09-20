import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anyfb0g-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anyfb0g-p"/>`,
		"fallback": "meteor-icons:turn-right-up",
	});
}

export default Component;
