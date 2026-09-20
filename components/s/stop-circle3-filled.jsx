import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb8r_pb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb8r_pb9w"/>`,
		"fallback": "reicon:stop-circle3-filled",
	});
}

export default Component;
