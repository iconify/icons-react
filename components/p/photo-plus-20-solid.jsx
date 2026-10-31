import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7k8nrb3i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g7k8nrb3i"/>`,
		"fallback": "sidekickicons:photo-plus-20-solid",
	});
}

export default Component;
