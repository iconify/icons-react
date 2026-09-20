import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaiv5obsq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaiv5obsq"/>`,
		"fallback": "pinhead:person-showering-with-soap-under-shower-spray",
	});
}

export default Component;
