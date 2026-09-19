import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/z/z802m9bnz.css';
import '../../css/r/r31xd1s8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path clip-rule="evenodd" class="z802m9bnz"/><path class="r31xd1s8a"/></g>`,
		"fallback": "icon-park:water-rate-two",
	});
}

export default Component;
