import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz542cbqq.css';
import '../../css/r/rv4rin_vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz542cbqq"/><path class="rv4rin_vb"/>`,
		"fallback": "prime:save",
	});
}

export default Component;
