import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z43p-_bzo.css';
import '../../css/t/tq_cotbup.css';
import '../../css/b/b-tgazyav.css';
import '../../css/q/qp7vvacem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z43p-_bzo"/><path class="tq_cotbup"/><path class="b-tgazyav"/><path class="qp7vvacem"/>`,
		"fallback": "solar:sd-card-bold-duotone",
	});
}

export default Component;
