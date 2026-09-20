import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lggc85m2o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lggc85m2o"/>`,
		"fallback": "streamline:interface-edit-select-area-circle-dash-select-area-object-work",
	});
}

export default Component;
