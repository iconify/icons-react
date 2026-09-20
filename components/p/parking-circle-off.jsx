import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/clslfqbym.css';
import '../../css/k/kgvx_7bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="clslfqbym"/><path class="kgvx_7bhd"/></g>`,
		"fallback": "lucide:parking-circle-off",
	});
}

export default Component;
