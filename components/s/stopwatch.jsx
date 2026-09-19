import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amlfk0b-w.css';
import '../../css/m/myx56ib_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="amlfk0b-w"/><path class="myx56ib_g"/>`,
		"fallback": "ion:stopwatch",
	});
}

export default Component;
