import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqa7o6dfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jqa7o6dfq"/>`,
		"fallback": "heroicons:map-solid",
	});
}

export default Component;
