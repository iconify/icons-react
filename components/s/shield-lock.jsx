import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w0r4owbrt.css';
import '../../css/m/mfkj-_b9y.css';
import '../../css/m/mdv60cckr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w0r4owbrt"/><path class="mfkj-_b9y"/><rect class="mdv60cckr"/></g>`,
		"fallback": "lucide:shield-lock",
	});
}

export default Component;
