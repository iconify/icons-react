import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c53yvkbxk.css';
import '../../css/h/hd016tgrz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c53yvkbxk"/><path class="hd016tgrz"/></g>`,
		"fallback": "streamline:money-cash-file-dollar-common-money-currency-cash-file",
	});
}

export default Component;
