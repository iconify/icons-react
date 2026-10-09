import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj594fbcf.css';
import '../../css/a/avqgz5tna.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj594fbcf"/><path class="avqgz5tna"/>`,
		"fallback": "energy-icons:wardrobe-20",
	});
}

export default Component;
