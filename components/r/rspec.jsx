import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8vjs4bpv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8vjs4bpv"/>`,
		"fallback": "thesvg:rspec",
	});
}

export default Component;
