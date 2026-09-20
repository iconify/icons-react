import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/okm4lpbds.css';
import '../../css/m/mio52ig2b.css';
import '../../css/x/xtsrmvj7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="okm4lpbds"/><circle class="mio52ig2b"/><circle class="xtsrmvj7o"/></g>`,
		"fallback": "lucide:user-round-key",
	});
}

export default Component;
