import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2o5zgssc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2o5zgssc"/>`,
		"fallback": "pinhead:person-balancing-on-low-mounted-beam",
	});
}

export default Component;
