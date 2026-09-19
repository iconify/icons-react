import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/berfx5bid.css';
import '../../css/x/xvhi1u9pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="berfx5bid"/><path class="xvhi1u9pz"/>`,
		"fallback": "bxl:python",
	});
}

export default Component;
