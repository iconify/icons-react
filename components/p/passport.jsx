import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-gtfwber.css';
import '../../css/c/cgfv1zh5k.css';
import '../../css/k/kv-1z5b6f.css';
import '../../css/g/g27jbvk3j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a-gtfwber"/><path class="cgfv1zh5k"/><path class="kv-1z5b6f"/><path class="g27jbvk3j"/></g>`,
		"fallback": "streamline-color:passport",
	});
}

export default Component;
