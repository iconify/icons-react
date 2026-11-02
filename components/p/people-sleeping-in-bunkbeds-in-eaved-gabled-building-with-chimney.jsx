import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cww1_ybzc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cww1_ybzc"/>`,
		"fallback": "pinhead:people-sleeping-in-bunkbeds-in-eaved-gabled-building-with-chimney",
	});
}

export default Component;
