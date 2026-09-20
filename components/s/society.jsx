import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guc56fbsq.css';
import '../../css/b/bqc81ux0g.css';
import '../../css/a/amspxabxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guc56fbsq"/><path class="bqc81ux0g"/><path class="amspxabxl"/>`,
		"fallback": "pixel:society",
	});
}

export default Component;
