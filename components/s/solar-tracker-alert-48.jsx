import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlo-1-b1r.css';
import '../../css/h/hgxu9lb6k.css';
import '../../css/r/rt3rcig7i.css';
import '../../css/w/wi0dpbc4a.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlo-1-b1r"/><path class="hgxu9lb6k"/><path class="rt3rcig7i"/><path class="wi0dpbc4a"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:solar-tracker-alert-48",
	});
}

export default Component;
