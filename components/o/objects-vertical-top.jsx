import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eghrhdq2l.css';
import '../../css/a/atosfkhsl.css';
import '../../css/j/jfwb-ipvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eghrhdq2l"/><rect class="atosfkhsl"/><rect class="jfwb-ipvu"/>`,
		"fallback": "bxs:objects-vertical-top",
	});
}

export default Component;
