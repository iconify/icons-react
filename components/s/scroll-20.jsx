import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghip4ybrb.css';
import '../../css/w/wjctu7hsw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghip4ybrb"/><path class="wjctu7hsw"/>`,
		"fallback": "energy-icons:scroll-20",
	});
}

export default Component;
