import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnf3cs2wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnf3cs2wa"/>`,
		"fallback": "iconamoon:sorting-right-thin",
	});
}

export default Component;
