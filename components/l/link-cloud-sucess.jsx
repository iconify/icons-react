import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/v7vw7i9ke.css';
import '../../css/a/abxymac_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="v7vw7i9ke"/><path class="abxymac_o"/></g>`,
		"fallback": "icon-park-outline:link-cloud-sucess",
	});
}

export default Component;
