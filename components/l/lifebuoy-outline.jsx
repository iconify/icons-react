import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebc1v__7u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebc1v__7u"/>`,
		"fallback": "teenyicons:lifebuoy-outline",
	});
}

export default Component;
