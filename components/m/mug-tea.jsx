import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t56w-kbog.css';
import '../../css/d/dklul-ukq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t56w-kbog"/><path class="dklul-ukq"/>`,
		"fallback": "cil:mug-tea",
	});
}

export default Component;
