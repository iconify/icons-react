import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8d4-cc9w.css';
import '../../css/p/p8mr26bfo.css';
import '../../css/g/g4j5pwbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8d4-cc9w"/><path clip-rule="evenodd" class="p8mr26bfo"/><path class="g4j5pwbyn"/>`,
		"fallback": "solar:laptop-bold-duotone",
	});
}

export default Component;
