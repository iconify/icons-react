import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g128-w4ww.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g128-w4ww"/>`,
		"fallback": "devicon-plain:pycharm-wordmark",
	});
}

export default Component;
