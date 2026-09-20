import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk1ci18po.css';
import '../../css/j/jwjgdy4tv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk1ci18po"/><path class="jwjgdy4tv"/>`,
		"fallback": "selfhst:profilarr-dark",
	});
}

export default Component;
