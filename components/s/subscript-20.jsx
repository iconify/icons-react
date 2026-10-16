import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opadiwbki.css';
import '../../css/y/yk_ojccds.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opadiwbki"/><path class="yk_ojccds"/>`,
		"fallback": "energy-icons:subscript-20",
	});
}

export default Component;
