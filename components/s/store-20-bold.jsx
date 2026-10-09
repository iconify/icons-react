import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjo2tqb0v.css';
import '../../css/s/sw3irebjg.css';
import '../../css/x/x-qw326ms.css';
import '../../css/i/i51_k7tim.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjo2tqb0v"/><path class="sw3irebjg"/><path class="x-qw326ms"/><path class="i51_k7tim"/>`,
		"fallback": "energy-icons:store-20-bold",
	});
}

export default Component;
