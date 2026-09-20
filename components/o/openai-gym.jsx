import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ych5b6ltu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ych5b6ltu"/>`,
		"fallback": "thesvg:openai-gym",
	});
}

export default Component;
