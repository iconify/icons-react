import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1l3kib5h.css';
import '../../css/s/srysnc0xq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1l3kib5h"/><path class="srysnc0xq"/>`,
		"fallback": "energy-icons:skyscraper-20",
	});
}

export default Component;
