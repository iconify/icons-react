import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0n8thbpp.css';
import '../../css/a/azwi-ublj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0n8thbpp"/><path class="azwi-ublj"/>`,
		"fallback": "devicon-plain:opensuse",
	});
}

export default Component;
