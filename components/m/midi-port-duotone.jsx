import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x65v47wkw.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/l/lr6ccgrbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x65v47wkw"/><path class="g4vvtk_cw"/><path class="lr6ccgrbu"/></g>`,
		"fallback": "lucide-extended:midi-port-duotone",
	});
}

export default Component;
