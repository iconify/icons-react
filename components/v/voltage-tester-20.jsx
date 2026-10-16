import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvi0cxbyw.css';
import '../../css/s/suxe2ovzi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvi0cxbyw"/><path class="suxe2ovzi"/>`,
		"fallback": "energy-icons:voltage-tester-20",
	});
}

export default Component;
