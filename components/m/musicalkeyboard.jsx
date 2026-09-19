import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql__uvuun.css';
import '../../css/m/m42qaacec.css';
import '../../css/p/pmct9tb7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql__uvuun"/><path class="m42qaacec"/><path class="pmct9tb7f"/>`,
		"fallback": "fxemoji:musicalkeyboard",
	});
}

export default Component;
