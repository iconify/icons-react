import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6h96-z2f.css';
import '../../css/z/zj49idy7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6h96-z2f"/><path class="zj49idy7n"/>`,
		"fallback": "octicon:plus-circle-24",
	});
}

export default Component;
