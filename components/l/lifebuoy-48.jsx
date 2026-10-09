import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/c/cmhnqibcc.css';
import '../../css/e/e7oomzbbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="cmhnqibcc"/><path class="e7oomzbbk"/>`,
		"fallback": "energy-icons:lifebuoy-48",
	});
}

export default Component;
