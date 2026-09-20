import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/attk0tb6r.css';
import '../../css/n/n2ghnjbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="attk0tb6r"/><path class="n2ghnjbko"/></g>`,
		"fallback": "lucide-lab:jug",
	});
}

export default Component;
