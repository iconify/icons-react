import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rar6yubnd.css';
import '../../css/x/x9-n5osao.css';
import '../../css/r/r9m5pabcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rar6yubnd"/><path class="x9-n5osao"/><path class="r9m5pabcn"/></g>`,
		"fallback": "keyline-icons:panel-bottom-close-dashed-two-tone",
	});
}

export default Component;
