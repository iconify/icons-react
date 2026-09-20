import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjvpp3bga.css';
import '../../css/d/dslthebzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjvpp3bga"/><circle class="dslthebzv"/>`,
		"fallback": "selfhst:protondb",
	});
}

export default Component;
