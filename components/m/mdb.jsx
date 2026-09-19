import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4c4oxb3f.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4c4oxb3f"/>`,
		"fallback": "fa-brands:mdb",
	});
}

export default Component;
