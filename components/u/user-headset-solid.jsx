import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk_6gseuv.css';
import '../../css/j/jtop0ctzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk_6gseuv"/><path class="jtop0ctzf"/>`,
		"fallback": "pixel:user-headset-solid",
	});
}

export default Component;
