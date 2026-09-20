import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz_46dbjy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz_46dbjy"/>`,
		"fallback": "pinhead:shopping-bag-with-shield",
	});
}

export default Component;
