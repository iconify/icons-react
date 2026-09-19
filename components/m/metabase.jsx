import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr3yo8b8a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr3yo8b8a"/>`,
		"fallback": "devicon-plain:metabase",
	});
}

export default Component;
