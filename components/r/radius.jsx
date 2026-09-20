import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypykr48yq.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/g/g-0q11brt.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ypykr48yq"/><circle class="xtsrmvj7o"/><path class="g-0q11brt"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "lucide:radius",
	});
}

export default Component;
