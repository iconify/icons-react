import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld3dvsbdz.css';
import '../../css/c/cvsu0tmol.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld3dvsbdz"/><path class="cvsu0tmol"/>`,
		"fallback": "energy-icons:shield-user-20-bold",
	});
}

export default Component;
