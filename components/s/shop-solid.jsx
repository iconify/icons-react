import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgk4045dp.css';
import '../../css/e/e26d43smq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgk4045dp"/><path class="e26d43smq"/>`,
		"fallback": "teenyicons:shop-solid",
	});
}

export default Component;
