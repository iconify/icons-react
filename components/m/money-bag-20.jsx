import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz03-sdij.css';
import '../../css/a/ajbkkgb-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz03-sdij"/><path class="ajbkkgb-a"/>`,
		"fallback": "energy-icons:money-bag-20",
	});
}

export default Component;
