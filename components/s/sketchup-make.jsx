import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-1edmnsy.css';

const viewBox = {"width":475,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-1edmnsy"/>`,
		"fallback": "file-icons:sketchup-make",
	});
}

export default Component;
