import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tixo1lber.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tixo1lber"/>`,
		"fallback": "gravity-ui:t-shirt",
	});
}

export default Component;
