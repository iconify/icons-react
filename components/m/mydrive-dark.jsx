import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekzz-41rw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekzz-41rw"/>`,
		"fallback": "selfhst:mydrive-dark",
	});
}

export default Component;
