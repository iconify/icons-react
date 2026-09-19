import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byawaojep.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byawaojep"/>`,
		"fallback": "fa:list-ol",
	});
}

export default Component;
