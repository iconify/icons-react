import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k6ojaub1h.css';
import '../../css/i/il468kbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k6ojaub1h"/><path class="il468kbci"/></g>`,
		"fallback": "lucide:save-off",
	});
}

export default Component;
