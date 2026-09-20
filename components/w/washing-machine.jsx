import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/krpkwd5pv.css';
import '../../css/l/luidaefrd.css';
import '../../css/g/g-oq6pvfd.css';
import '../../css/w/wlv9l_2vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="krpkwd5pv"/><rect class="luidaefrd"/><circle class="g-oq6pvfd"/><path class="wlv9l_2vu"/></g>`,
		"fallback": "lucide:washing-machine",
	});
}

export default Component;
