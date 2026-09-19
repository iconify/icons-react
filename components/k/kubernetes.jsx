import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfxjh-beo.css';
import '../../css/j/j94shoiso.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfxjh-beo"/><path class="j94shoiso"/>`,
		"fallback": "devicon:kubernetes",
	});
}

export default Component;
