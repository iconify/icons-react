import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8pk9obri.css';
import '../../css/e/eepyewbvn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8pk9obri"/><path class="eepyewbvn"/>`,
		"fallback": "energy-icons:nodule-20-bold",
	});
}

export default Component;
