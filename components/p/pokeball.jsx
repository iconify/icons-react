import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4zs08s-q.css';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b2c0qprhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGOFGrfdbi" class="g4zs08s-q"/></defs><g class="jx0p4fbya"><use href="#SVGOFGrfdbi"/><use href="#SVGOFGrfdbi"/><path class="b2c0qprhd"/></g>`,
		"fallback": "hugeicons:pokeball",
	});
}

export default Component;
