import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfv8uccdl.css';
import '../../css/g/gr-hcbcva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfv8uccdl"/><path class="gr-hcbcva"/>`,
		"fallback": "famicons:thumbs-down-outline",
	});
}

export default Component;
