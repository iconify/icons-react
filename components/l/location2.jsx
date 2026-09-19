import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwz76--ar.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwz76--ar"/>`,
		"fallback": "icomoon-free:location2",
	});
}

export default Component;
