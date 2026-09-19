import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmz_rrbpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmz_rrbpw"/>`,
		"fallback": "ion:md-contrast",
	});
}

export default Component;
