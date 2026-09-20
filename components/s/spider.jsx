import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gweqim1uf.css';
import '../../css/h/heaqcrbpm.css';
import '../../css/e/exsk02_mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gweqim1uf"/><path class="heaqcrbpm"/><path class="exsk02_mj"/></g>`,
		"fallback": "lucide-lab:spider",
	});
}

export default Component;
