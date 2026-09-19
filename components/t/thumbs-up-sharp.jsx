import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1cbfwy3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1cbfwy3r"/>`,
		"fallback": "famicons:thumbs-up-sharp",
	});
}

export default Component;
