import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc7tfnbgj.css';
import '../../css/e/eu3o_ilxw.css';
import '../../css/b/b1ql3zb2y.css';
import '../../css/g/g6vgndbzt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc7tfnbgj"/><path class="eu3o_ilxw"/><path class="b1ql3zb2y"/><path class="g6vgndbzt"/>`,
		"fallback": "devicon:threedsmax",
	});
}

export default Component;
