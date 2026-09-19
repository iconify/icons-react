import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sunnwjbfh.css';
import '../../css/s/sn5sf53te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sunnwjbfh"/><path class="sn5sf53te"/>`,
		"fallback": "eos-icons:virtual-guest",
	});
}

export default Component;
