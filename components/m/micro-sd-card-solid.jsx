import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxw-ku7it.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxw-ku7it"/>`,
		"fallback": "teenyicons:micro-sd-card-solid",
	});
}

export default Component;
