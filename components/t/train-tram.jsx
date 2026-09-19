import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grc9q2ges.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grc9q2ges"/>`,
		"fallback": "fa7-solid:train-tram",
	});
}

export default Component;
