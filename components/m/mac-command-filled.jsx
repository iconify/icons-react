import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to8dx_b8t.css';
import '../../css/x/x0n0x1bdz.css';
import '../../css/f/f_lfe3b5g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to8dx_b8t"/><path class="x0n0x1bdz"/><path class="f_lfe3b5g"/>`,
		"fallback": "ant-design:mac-command-filled",
	});
}

export default Component;
