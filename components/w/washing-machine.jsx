import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayei4nb0s.css';
import '../../css/w/wx79_4b5c.css';
import '../../css/v/v3ty2ebtb.css';
import '../../css/l/lrw2m_4ec.css';
import '../../css/n/nli7zm7he.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ayei4nb0s"/><path class="wx79_4b5c"/><circle class="v3ty2ebtb"/><circle class="lrw2m_4ec"/><circle class="nli7zm7he"/></g>`,
		"fallback": "icon-park-outline:washing-machine",
	});
}

export default Component;
