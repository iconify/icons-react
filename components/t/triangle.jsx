import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb29_fb7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb29_fb7y"/>`,
		"fallback": "cil:triangle",
	});
}

export default Component;
