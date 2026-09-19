import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4xf1bb5l.css';
import '../../css/r/r8hexeb-r.css';
import '../../css/t/tzln04b4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4xf1bb5l"/><path class="r8hexeb-r"/><path class="tzln04b4b"/>`,
		"fallback": "fxemoji:menssymbol",
	});
}

export default Component;
