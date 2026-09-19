import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz52sdd4d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz52sdd4d"/>`,
		"fallback": "f7:largecircle-fill-circle",
	});
}

export default Component;
