import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r31ezd-mg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r31ezd-mg"/>`,
		"fallback": "qlementine-icons:library-16",
	});
}

export default Component;
