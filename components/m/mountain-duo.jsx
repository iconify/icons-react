import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1tr-fv7h.css';
import '../../css/o/o6ycr5b3f.css';
import '../../css/f/ffh-ppbpa.css';
import '../../css/o/opty9n_jo.css';
import '../../css/a/a6a1g9_ko.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1tr-fv7h"/><path class="o6ycr5b3f"/><path class="ffh-ppbpa"/><path class="opty9n_jo"/><path class="a6a1g9_ko"/></g>`,
		"fallback": "streamline-kameleon-color:mountain-duo",
	});
}

export default Component;
