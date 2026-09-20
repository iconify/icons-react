import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/a/amsghu__k.css';
import '../../css/b/be58qobng.css';
import '../../css/e/epduyp38i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="amsghu__k"/><path class="be58qobng"/><path class="epduyp38i"/></g>`,
		"fallback": "streamline-kameleon-color:prism-2",
	});
}

export default Component;
