import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zdvvn6psi.css';
import '../../css/m/m7olahbxe.css';
import '../../css/m/m2fgxfk8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zdvvn6psi"/><path class="m7olahbxe"/><path class="m2fgxfk8a"/></g>`,
		"fallback": "streamline-cyber:shopping-bag-frown",
	});
}

export default Component;
