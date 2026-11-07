import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id4air0sa.css';
import '../../css/z/z6k-h7b9c.css';
import '../../css/h/h8c2zibww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="id4air0sa"/><path class="z6k-h7b9c"/><path class="h8c2zibww"/>`,
		"fallback": "solar:server-path-outline",
	});
}

export default Component;
