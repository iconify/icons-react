import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu2l__qdm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu2l__qdm"/>`,
		"fallback": "teenyicons:phonecall-blocked-outline",
	});
}

export default Component;
