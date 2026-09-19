import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dklul-ukq.css';
import '../../css/t/tgyzahb8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dklul-ukq"/><path class="tgyzahb8t"/>`,
		"fallback": "cil:mug",
	});
}

export default Component;
