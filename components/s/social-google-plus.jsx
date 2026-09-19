import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhmipyblw.css';
import '../../css/v/vztvh8bnd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhmipyblw"/><path class="vztvh8bnd"/>`,
		"fallback": "foundation:social-google-plus",
	});
}

export default Component;
