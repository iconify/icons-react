import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4jh8i2nw.css';
import '../../css/r/rlx7job7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r4jh8i2nw"/><path class="rlx7job7m"/></g>`,
		"fallback": "lucide-lab:shower",
	});
}

export default Component;
