import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-p5fqb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-p5fqb6y"/>`,
		"fallback": "withicons:tornado-solid",
	});
}

export default Component;
