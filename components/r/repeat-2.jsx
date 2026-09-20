import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a5h1hycer.css';
import '../../css/m/mnfi-r6xl.css';
import '../../css/z/ze_zgdbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a5h1hycer"/><path class="mnfi-r6xl"/><path class="ze_zgdbna"/></g>`,
		"fallback": "lucide:repeat-2",
	});
}

export default Component;
