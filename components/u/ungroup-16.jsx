import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnovpgzed.css';
import '../../css/j/jikoplbuj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnovpgzed"/><path clip-rule="evenodd" class="jikoplbuj"/>`,
		"fallback": "qlementine-icons:ungroup-16",
	});
}

export default Component;
