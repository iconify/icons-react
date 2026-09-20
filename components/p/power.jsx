import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usac0up9h.css';
import '../../css/b/bo0bdiq0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usac0up9h"/><path class="bo0bdiq0x"/>`,
		"fallback": "oui:power",
	});
}

export default Component;
