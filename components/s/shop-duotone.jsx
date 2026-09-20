import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b__vzjb9s.css';
import '../../css/t/tvb2i4bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b__vzjb9s"/><path class="tvb2i4bux"/>`,
		"fallback": "lets-icons:shop-duotone",
	});
}

export default Component;
