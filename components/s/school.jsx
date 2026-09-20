import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zir0f_raf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zir0f_raf"/>`,
		"fallback": "maki:school",
	});
}

export default Component;
