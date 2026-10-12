import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxia6zz2s.css';
import '../../css/a/afzjcibgy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxia6zz2s"/><path class="afzjcibgy"/>`,
		"fallback": "energy-icons:pi-20-bold",
	});
}

export default Component;
