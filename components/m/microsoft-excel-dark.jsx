import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph--6ybee.css';
import '../../css/o/oemvvsbfu.css';
import '../../css/k/k8-noccie.css';
import '../../css/u/urkmcdwfb.css';
import '../../css/y/yz7raabqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph--6ybee"/><path class="oemvvsbfu"/><path class="k8-noccie"/><path class="urkmcdwfb"/><path class="yz7raabqt"/>`,
		"fallback": "selfhst:microsoft-excel-dark",
	});
}

export default Component;
