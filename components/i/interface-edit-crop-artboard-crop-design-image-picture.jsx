import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oxvgr6aqa.css';
import '../../css/t/tw8nk2bag.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oxvgr6aqa"/><path class="tw8nk2bag"/></g>`,
		"fallback": "streamline:interface-edit-crop-artboard-crop-design-image-picture",
	});
}

export default Component;
