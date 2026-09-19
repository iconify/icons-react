import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h2kar04zl.css';
import '../../css/g/gwrmm3xbs.css';
import '../../css/f/ft6udiq_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h2kar04zl"/><path class="gwrmm3xbs"/><circle class="ft6udiq_a"/></g>`,
		"fallback": "icon-park-solid:shaver-one",
	});
}

export default Component;
