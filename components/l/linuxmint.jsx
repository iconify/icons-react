import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrtqw4bir.css';
import '../../css/c/cat4-0bmn.css';
import '../../css/k/k-_vm5b-j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrtqw4bir"/><path class="cat4-0bmn"/><path class="k-_vm5b-j"/>`,
		"fallback": "devicon:linuxmint",
	});
}

export default Component;
