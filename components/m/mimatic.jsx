import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9abw714l.css';
import '../../css/o/oulxfua7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9abw714l"/><path clip-rule="evenodd" class="oulxfua7k"/>`,
		"fallback": "token:mimatic",
	});
}

export default Component;
