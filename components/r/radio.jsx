import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr7ox659t.css';
import '../../css/k/kqxojurgk.css';
import '../../css/d/d5l_p05mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr7ox659t"/><circle class="kqxojurgk"/><path class="d5l_p05mg"/>`,
		"fallback": "bx:radio",
	});
}

export default Component;
