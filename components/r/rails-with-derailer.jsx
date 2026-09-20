import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn7rt1cnj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn7rt1cnj"/>`,
		"fallback": "roentgen:rails-with-derailer",
	});
}

export default Component;
