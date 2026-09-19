import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tij9n_bhf.css';
import '../../css/e/ezspdub9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tij9n_bhf"/><path class="ezspdub9l"/>`,
		"fallback": "ion:tennisball",
	});
}

export default Component;
