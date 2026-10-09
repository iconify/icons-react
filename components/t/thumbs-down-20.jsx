import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce3fwetfj.css';
import '../../css/p/pw5qjybai.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce3fwetfj"/><path class="pw5qjybai"/>`,
		"fallback": "energy-icons:thumbs-down-20",
	});
}

export default Component;
