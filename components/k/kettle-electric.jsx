import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mnw0vzwqc.css';
import '../../css/w/ww7m-fvng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mnw0vzwqc"/><path class="ww7m-fvng"/></g>`,
		"fallback": "lucide-lab:kettle-electric",
	});
}

export default Component;
