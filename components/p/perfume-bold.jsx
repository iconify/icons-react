import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdsnyjdfe.css';
import '../../css/b/b_2rxbb6i.css';
import '../../css/k/k1hcvjbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdsnyjdfe"/><path class="b_2rxbb6i"/><path class="k1hcvjbci"/>`,
		"fallback": "solar:perfume-bold",
	});
}

export default Component;
