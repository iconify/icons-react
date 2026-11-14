import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/e/ertbex__b.css';
import '../../css/z/z2w-83bda.css';
import '../../css/l/lrx87p__r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="ertbex__b"/><circle class="z2w-83bda"/><path class="lrx87p__r"/></g>`,
		"fallback": "codex:sliders",
	});
}

export default Component;
