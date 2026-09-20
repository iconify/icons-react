import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dssyg4bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dssyg4bny"/>`,
		"fallback": "thesvg-color:lg-ai-kmmlu-exaone",
	});
}

export default Component;
