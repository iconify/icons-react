import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gda_39avp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gda_39avp"/>`,
		"fallback": "icon-park-outline:peoples",
	});
}

export default Component;
