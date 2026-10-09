import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpac6cbfj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpac6cbfj"/>`,
		"fallback": "energy-icons:wave-energy-converter-20",
	});
}

export default Component;
