import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg882nbuh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg882nbuh"/>`,
		"fallback": "teenyicons:redwoodjs-solid",
	});
}

export default Component;
