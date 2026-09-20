import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mio52ig2b.css';
import '../../css/l/lfg29bdov.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/w/wc5069bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="mio52ig2b"/><path class="lfg29bdov"/><circle class="ez1x61b2a"/><path class="wc5069bmr"/></g>`,
		"fallback": "lucide:user-round-search",
	});
}

export default Component;
