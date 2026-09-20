import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi442-b8d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zi442-b8d"/>`,
		"fallback": "teenyicons:list-unordered-solid",
	});
}

export default Component;
