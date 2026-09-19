import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/som_9bofx.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="som_9bofx"/>`,
		"fallback": "fontelico:spin3",
	});
}

export default Component;
