import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf6i3943p.css';
import '../../css/o/o8ta-ebdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rf6i3943p"/><path clip-rule="evenodd" class="o8ta-ebdt"/></g>`,
		"fallback": "healthicons:malaria-pf-microscope",
	});
}

export default Component;
