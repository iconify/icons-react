import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2zpr77lu.css';
import '../../css/q/qhpij3bsp.css';
import '../../css/o/ofnfaeuml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="b2zpr77lu"><path class="qhpij3bsp"/><path class="ofnfaeuml"/></g>`,
		"fallback": "material-icon-theme:posthtml",
	});
}

export default Component;
