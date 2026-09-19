import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf_vqb6ra.css';
import '../../css/u/ufnji5p1c.css';
import '../../css/x/xec2qh1xw.css';
import '../../css/k/k9hgj4wof.css';
import '../../css/y/yj-l38s9d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf_vqb6ra"/><path class="ufnji5p1c"/><path class="xec2qh1xw"/><path class="k9hgj4wof"/><path class="yj-l38s9d"/>`,
		"fallback": "devicon:opencl",
	});
}

export default Component;
