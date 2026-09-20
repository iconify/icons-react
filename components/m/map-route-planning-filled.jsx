import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt_r8ccrc.css';
import '../../css/t/tdc8sp8bz.css';
import '../../css/n/nkkhqzxyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt_r8ccrc"/><path class="tdc8sp8bz"/><path class="nkkhqzxyi"/>`,
		"fallback": "tdesign:map-route-planning-filled",
	});
}

export default Component;
