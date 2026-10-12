import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/i/ip0ttws8e.css';
import '../../css/g/g4pnh0j-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="ip0ttws8e"/><path class="g4pnh0j-c"/></g>`,
		"fallback": "lucide-extended:panel-left-open-duotone",
	});
}

export default Component;
