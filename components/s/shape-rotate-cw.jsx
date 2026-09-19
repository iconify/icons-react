import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx3-ah38a.css';
import '../../css/g/gjzjcyb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b tx3-ah38a"/><path class="b gjzjcyb6i"/>`,
		"fallback": "boxicons:shape-rotate-cw",
	});
}

export default Component;
