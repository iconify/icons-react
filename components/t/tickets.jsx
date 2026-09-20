import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/odozyr5dg.css';
import '../../css/c/cz46b-bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="odozyr5dg"/><rect class="cz46b-bku"/></g>`,
		"fallback": "lucide:tickets",
	});
}

export default Component;
