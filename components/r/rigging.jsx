import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owws5tblj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owws5tblj"/>`,
		"fallback": "temaki:rigging",
	});
}

export default Component;
