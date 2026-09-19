import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m27p55t_c.css';
import '../../css/g/gqu4bebvs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m27p55t_c"/><path class="gqu4bebvs"/>`,
		"fallback": "devicon:nasm",
	});
}

export default Component;
