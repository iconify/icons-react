import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2cvywb3g.css';
import '../../css/x/x1i6yhgya.css';
import '../../css/k/k5gujvbth.css';
import '../../css/c/c1r-wtblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2cvywb3g"/><path clip-rule="evenodd" class="x1i6yhgya"/><path clip-rule="evenodd" class="k5gujvbth"/><path clip-rule="evenodd" class="c1r-wtblo"/>`,
		"fallback": "token:pex",
	});
}

export default Component;
