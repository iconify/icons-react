import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3ig00-8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3ig00-8f"/>`,
		"fallback": "ci:thin-big-left",
	});
}

export default Component;
