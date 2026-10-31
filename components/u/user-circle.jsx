import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m1e7cqbol.css';
import '../../css/k/k4oox_b9w.css';
import '../../css/m/mu1z8mboi.css';
import '../../css/c/cujfar3uz.css';
import '../../css/m/mqzsc39nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m1e7cqbol"/><path class="k4oox_b9w wm-shine"/><path class="mu1z8mboi"/><path class="cujfar3uz"/><path class="mqzsc39nm"/></g>`,
		"fallback": "withicons-kawaii:user-circle",
	});
}

export default Component;
