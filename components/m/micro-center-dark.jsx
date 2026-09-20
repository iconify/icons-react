import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/megucjbvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="megucjbvn"/>`,
		"fallback": "selfhst:micro-center-dark",
	});
}

export default Component;
