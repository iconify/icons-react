import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd11hok7e.css';
import '../../css/r/rw7vibdxe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd11hok7e"/><path class="rw7vibdxe"/>`,
		"fallback": "maki:shoe-15",
	});
}

export default Component;
