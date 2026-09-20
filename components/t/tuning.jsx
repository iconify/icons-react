import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsdqp2o5n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsdqp2o5n"/>`,
		"fallback": "zondicons:tuning",
	});
}

export default Component;
