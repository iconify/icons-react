import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa_537b3f.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa_537b3f"/>`,
		"fallback": "jam:opera",
	});
}

export default Component;
