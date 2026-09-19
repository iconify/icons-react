import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aags1jb7a.css';
import '../../css/f/fve51_hdk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aags1jb7a"/><path class="fve51_hdk"/>`,
		"fallback": "ep:shopping-bag",
	});
}

export default Component;
