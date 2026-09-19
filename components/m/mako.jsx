import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0hfqbfrq.css';

const viewBox = {"width":338,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0hfqbfrq"/>`,
		"fallback": "file-icons:mako",
	});
}

export default Component;
