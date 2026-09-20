import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh__4bxtl.css';
import '../../css/r/r1xemmb8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh__4bxtl"/><path class="r1xemmb8r"/>`,
		"fallback": "selfhst:myheats-dark",
	});
}

export default Component;
