import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtge9yb3h.css';
import '../../css/z/z_6r0ejay.css';
import '../../css/n/nnagpvtvx.css';

const viewBox = {"width":49,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtge9yb3h"/><path class="z_6r0ejay"/><path class="nnagpvtvx"/>`,
		"fallback": "octicon:logo-github-16",
	});
}

export default Component;
