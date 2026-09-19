import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw4zib99i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw4zib99i"/>`,
		"fallback": "icomoon-free:vimeo2",
	});
}

export default Component;
