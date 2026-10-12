import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr-zs8cga.css';
import '../../css/o/ooobm-34o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr-zs8cga"/><path class="ooobm-34o"/>`,
		"fallback": "energy-icons:turtle-20-bold",
	});
}

export default Component;
