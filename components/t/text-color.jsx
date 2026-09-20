import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/robwd6bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="robwd6bgc"/>`,
		"fallback": "tabler:text-color",
	});
}

export default Component;
