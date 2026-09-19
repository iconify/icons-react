import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b500ppqck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b500ppqck"/>`,
		"fallback": "hugeicons:plus-minus-02",
	});
}

export default Component;
