import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvnmchr1u.css';
import '../../css/z/z6avml47a.css';
import '../../css/p/pvttq6b9s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvnmchr1u"/><path class="z6avml47a"/><path class="pvttq6b9s"/>`,
		"fallback": "devicon:protractor",
	});
}

export default Component;
