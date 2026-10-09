import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rul5h6brj.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/o/oqrsy3bng.css';
import '../../css/u/uq11f0fet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rul5h6brj"/><path class="hwjgqrbah"/><path class="oqrsy3bng"/><path class="uq11f0fet"/>`,
		"fallback": "energy-icons:sun-x-48-bold",
	});
}

export default Component;
