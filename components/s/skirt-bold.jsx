import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zppc8rbit.css';
import '../../css/f/fmy-1sbhx.css';
import '../../css/o/otzgm8e6s.css';
import '../../css/c/c4oqwbcar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zppc8rbit"/><path class="fmy-1sbhx"/><path class="otzgm8e6s"/><path class="c4oqwbcar"/>`,
		"fallback": "solar:skirt-bold",
	});
}

export default Component;
