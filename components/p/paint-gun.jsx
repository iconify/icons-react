import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p20adwbpg.css';
import '../../css/o/oua8bue4c.css';
import '../../css/c/c-hdtesmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p20adwbpg"/><path class="oua8bue4c"/><rect class="c-hdtesmm"/></g>`,
		"fallback": "lucide:paint-gun",
	});
}

export default Component;
