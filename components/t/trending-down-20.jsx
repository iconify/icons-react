import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhczfhb2e.css';
import '../../css/c/clf6f0bwy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhczfhb2e"/><path class="clf6f0bwy"/>`,
		"fallback": "energy-icons:trending-down-20",
	});
}

export default Component;
