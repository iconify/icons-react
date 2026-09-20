import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9-nmqbvh.css';
import '../../css/c/cweualbvx.css';
import '../../css/x/xut3d3bpk.css';
import '../../css/m/mu2tdkvgi.css';
import '../../css/z/zjyqwjlzo.css';

const viewBox = {"width":352.28,"height":398.67};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9-nmqbvh"/><path class="cweualbvx"/><path class="xut3d3bpk"/><path class="mu2tdkvgi"/><path class="zjyqwjlzo"/>`,
		"fallback": "thesvg-color:tiktok-light",
	});
}

export default Component;
