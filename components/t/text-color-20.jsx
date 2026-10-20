import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dld0-6buw.css';
import '../../css/b/bdj9pbbup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dld0-6buw"/><path class="bdj9pbbup"/>`,
		"fallback": "energy-icons:text-color-20",
	});
}

export default Component;
