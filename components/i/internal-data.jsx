import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2vbowdbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2vbowdbm"/>`,
		"fallback": "icon-park-outline:internal-data",
	});
}

export default Component;
