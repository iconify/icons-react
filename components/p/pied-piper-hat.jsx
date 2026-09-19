import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xikwt1jtn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xikwt1jtn"/>`,
		"fallback": "fa-brands:pied-piper-hat",
	});
}

export default Component;
