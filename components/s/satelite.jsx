import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7t30-klj.css';
import '../../css/n/nbg7fqb_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7t30-klj"/><path class="nbg7fqb_b"/>`,
		"fallback": "cil:satelite",
	});
}

export default Component;
