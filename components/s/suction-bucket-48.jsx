import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jya9pfbcj.css';
import '../../css/d/d_8ujsb3y.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jya9pfbcj"/><path class="d_8ujsb3y"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:suction-bucket-48",
	});
}

export default Component;
