import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/n/nrng1f7oh.css';
import '../../css/s/s1mp9v99t.css';
import '../../css/j/jmyzpn4cy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="nrng1f7oh"/><path class="s1mp9v99t"/><path class="jmyzpn4cy"/></g>`,
		"fallback": "icon-park:text",
	});
}

export default Component;
