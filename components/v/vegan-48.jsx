import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/u/u1ze__bpo.css';
import '../../css/p/p9eg_4xdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="u1ze__bpo"/><path class="p9eg_4xdi"/>`,
		"fallback": "energy-icons:vegan-48",
	});
}

export default Component;
