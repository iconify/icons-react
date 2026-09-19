import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/b/bibhvib_i.css';
import '../../css/d/dny3ldrbk.css';
import '../../css/m/m5z_elexp.css';
import '../../css/z/z8oghbbab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><ellipse class="bibhvib_i"/><path class="dny3ldrbk"/><circle class="m5z_elexp"/><circle class="z8oghbbab"/></g>`,
		"fallback": "icon-park:soap-bubble",
	});
}

export default Component;
