import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qht09-59q.css';
import '../../css/a/ana62cbyy.css';
import '../../css/q/q4oxf2bji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qht09-59q"/><path class="ana62cbyy"/><path class="q4oxf2bji"/>`,
		"fallback": "fxemoji:waningbibbousmoon",
	});
}

export default Component;
