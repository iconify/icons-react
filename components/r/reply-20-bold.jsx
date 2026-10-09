import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isdsq57jo.css';
import '../../css/g/gjhoxrmlt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isdsq57jo"/><path class="gjhoxrmlt"/>`,
		"fallback": "energy-icons:reply-20-bold",
	});
}

export default Component;
