import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztw2c0b2i.css';
import '../../css/u/u_7ar5bnj.css';
import '../../css/b/bsnu2pbme.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztw2c0b2i"/><path clip-rule="evenodd" class="u_7ar5bnj"/><path class="bsnu2pbme"/>`,
		"fallback": "teenyicons:lan-cable-solid",
	});
}

export default Component;
