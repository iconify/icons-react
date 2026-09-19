import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o0yhpnb_z.css';
import '../../css/e/ebtfywieo.css';
import '../../css/n/n2r9t-bkq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="o0yhpnb_z"/><path class="ebtfywieo"/><path class="n2r9t-bkq"/></g>`,
		"fallback": "icon-park:romper",
	});
}

export default Component;
