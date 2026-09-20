import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h27h8qbda.css';
import '../../css/g/giuvwzbiq.css';
import '../../css/c/ckfq98akt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h27h8qbda"/><path class="giuvwzbiq"/><path class="ckfq98akt"/>`,
		"fallback": "thesvg-color:spack",
	});
}

export default Component;
