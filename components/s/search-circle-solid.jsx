import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9tf64bke.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m9tf64bke"/>`,
		"fallback": "teenyicons:search-circle-solid",
	});
}

export default Component;
