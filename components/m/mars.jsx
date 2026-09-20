import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rnanptb7p.css';
import '../../css/w/wlt3uybxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rnanptb7p"/><circle class="wlt3uybxg"/></g>`,
		"fallback": "lucide:mars",
	});
}

export default Component;
