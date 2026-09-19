import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4rwk7b8u.css';
import '../../css/r/r8fapn48o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4rwk7b8u"/><path class="r8fapn48o"/>`,
		"fallback": "ion:social-googleplus-outline",
	});
}

export default Component;
