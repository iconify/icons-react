import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z12mh10-b.css';
import '../../css/a/absmdjrwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z12mh10-b"/><path class="absmdjrwy"/></g>`,
		"fallback": "tabler:number-9",
	});
}

export default Component;
