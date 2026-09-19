import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/h/h2d1uzdoc.css';
import '../../css/d/dn9_f7ejl.css';
import '../../css/e/ebfeu-bpq.css';
import '../../css/w/wvk-vobrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="h2d1uzdoc"/><path class="dn9_f7ejl"/><path class="ebfeu-bpq"/><path class="wvk-vobrf"/></g>`,
		"fallback": "icon-park:switching-done",
	});
}

export default Component;
