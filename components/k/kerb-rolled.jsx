import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgjx29b-o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgjx29b-o"/>`,
		"fallback": "temaki:kerb-rolled",
	});
}

export default Component;
