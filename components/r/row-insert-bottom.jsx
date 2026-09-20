import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zko6-tb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zko6-tb4g"/>`,
		"fallback": "tabler:row-insert-bottom",
	});
}

export default Component;
