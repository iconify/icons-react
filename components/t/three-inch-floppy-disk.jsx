import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyb6zf3uf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyb6zf3uf"/>`,
		"fallback": "pinhead:three-inch-floppy-disk",
	});
}

export default Component;
