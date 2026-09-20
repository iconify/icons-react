import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spfghmjsv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spfghmjsv"/>`,
		"fallback": "oui:token-struct",
	});
}

export default Component;
