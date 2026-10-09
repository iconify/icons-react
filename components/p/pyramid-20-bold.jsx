import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig39blqsl.css';
import '../../css/t/tx633bbfk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig39blqsl"/><path class="tx633bbfk"/>`,
		"fallback": "energy-icons:pyramid-20-bold",
	});
}

export default Component;
