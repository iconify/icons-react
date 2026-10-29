import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl5uzhbhz.css';
import '../../css/e/egfpnrb2n.css';
import '../../css/i/i07gwburj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl5uzhbhz"/><path class="egfpnrb2n"/><path class="i07gwburj"/>`,
		"fallback": "withicons-bauhaus:user-circle",
	});
}

export default Component;
