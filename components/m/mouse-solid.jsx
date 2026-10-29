import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1yn25bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1yn25bqa"/>`,
		"fallback": "withicons:mouse-solid",
	});
}

export default Component;
