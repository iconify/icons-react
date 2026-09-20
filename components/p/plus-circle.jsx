import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogoznx9lr.css';
import '../../css/m/mabwzbbvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogoznx9lr"/><path class="mabwzbbvc"/>`,
		"fallback": "nimbus:plus-circle",
	});
}

export default Component;
