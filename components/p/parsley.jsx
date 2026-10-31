import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-5phdrxp.css';
import '../../css/j/jy7yjd_qr.css';
import '../../css/g/g-g8cgxth.css';
import '../../css/c/c40d55b5l.css';
import '../../css/h/h1uqilb5t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-5phdrxp"/><path class="jy7yjd_qr"/><path class="g-g8cgxth"/><path class="c40d55b5l"/><path class="h1uqilb5t"/>`,
		"fallback": "iconito:parsley",
	});
}

export default Component;
