import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8ruyacxf.css';
import '../../css/l/la4b0i5sl.css';
import '../../css/g/gx-o-jbfy.css';
import '../../css/b/b701h2wuj.css';
import '../../css/g/gb9s77bxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8ruyacxf"/><path class="la4b0i5sl"/><path class="gx-o-jbfy"/><path class="b701h2wuj"/><path class="gb9s77bxd"/>`,
		"fallback": "ion:ios-paper-outline",
	});
}

export default Component;
