import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0l1hcnqj.css';
import '../../css/j/jmv2g9b4i.css';
import '../../css/j/jqx-1ym2u.css';
import '../../css/d/du_hydbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0l1hcnqj"/><path class="jmv2g9b4i"/><path class="jqx-1ym2u"/><path class="du_hydbjz"/>`,
		"fallback": "solar:ticket-sale-bold-duotone",
	});
}

export default Component;
