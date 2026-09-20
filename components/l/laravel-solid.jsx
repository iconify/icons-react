import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ems_ytbdz.css';
import '../../css/x/xwn1thb9y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ems_ytbdz"/><path clip-rule="evenodd" class="xwn1thb9y"/>`,
		"fallback": "teenyicons:laravel-solid",
	});
}

export default Component;
