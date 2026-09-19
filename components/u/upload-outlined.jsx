import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kilp2bv1g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kilp2bv1g"/>`,
		"fallback": "ant-design:upload-outlined",
	});
}

export default Component;
