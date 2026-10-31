import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej73ggbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej73ggbqo"/>`,
		"fallback": "coolicons:layout-template-round",
	});
}

export default Component;
