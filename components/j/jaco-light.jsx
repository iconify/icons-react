import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn23hpbkx.css';
import '../../css/v/vnr755bor.css';
import '../../css/s/sel3n_zfh.css';
import '../../css/f/fygbm3b7s.css';
import '../../css/c/cl9a964ll.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="mn23hpbkx"/><path class="vnr755bor"/><path class="sel3n_zfh"/><path class="fygbm3b7s"/><circle class="cl9a964ll"/>`,
		"fallback": "thesvg-color:jaco-light",
	});
}

export default Component;
