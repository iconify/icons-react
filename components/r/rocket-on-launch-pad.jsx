import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr3ix3wqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr3ix3wqp"/>`,
		"fallback": "roentgen:rocket-on-launch-pad",
	});
}

export default Component;
