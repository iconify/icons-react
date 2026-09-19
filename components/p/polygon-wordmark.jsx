import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-o-n6vfd.css';
import '../../css/h/hq6p7itxj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-o-n6vfd"/><path class="hq6p7itxj"/>`,
		"fallback": "devicon:polygon-wordmark",
	});
}

export default Component;
