import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnboovlfn.css';
import '../../css/c/c-h-kzbwd.css';
import '../../css/g/giut3nb_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnboovlfn"/><path class="c-h-kzbwd"/><path class="giut3nb_b"/>`,
		"fallback": "ion:ios-stopwatch",
	});
}

export default Component;
