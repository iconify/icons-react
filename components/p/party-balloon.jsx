import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kb1ty3wqo.css';
import '../../css/e/ejctb8bxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kb1ty3wqo"/><path class="ejctb8bxa"/></g>`,
		"fallback": "icon-park:party-balloon",
	});
}

export default Component;
