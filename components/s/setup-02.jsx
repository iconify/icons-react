import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ns5w6ubak.css';
import '../../css/p/peiq2hfxm.css';
import '../../css/s/st3qdy0bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ns5w6ubak"/><circle class="peiq2hfxm"/><path class="st3qdy0bw"/></g>`,
		"fallback": "hugeicons:setup-02",
	});
}

export default Component;
