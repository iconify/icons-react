import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrtq4obqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrtq4obqw"/>`,
		"fallback": "ri:pencil-ai-fill",
	});
}

export default Component;
