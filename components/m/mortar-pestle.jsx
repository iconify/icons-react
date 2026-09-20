import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovpkd-b5j.css';
import '../../css/s/sr1jcbcrc.css';
import '../../css/o/o3frjt0ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ovpkd-b5j"/><path class="sr1jcbcrc"/><path class="o3frjt0ug"/></g>`,
		"fallback": "lucide-lab:mortar-pestle",
	});
}

export default Component;
