import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/domlw-b2t.css';

const viewBox = {"width":580,"height":580};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="domlw-b2t"/>`,
		"fallback": "thesvg-color:ragas",
	});
}

export default Component;
