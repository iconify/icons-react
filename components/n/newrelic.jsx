import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhmbx9-pc.css';
import '../../css/w/w92r8zftn.css';
import '../../css/v/v3w7a-bmx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhmbx9-pc"/><path class="w92r8zftn"/><path class="v3w7a-bmx"/>`,
		"fallback": "devicon:newrelic",
	});
}

export default Component;
