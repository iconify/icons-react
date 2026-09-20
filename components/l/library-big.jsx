import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9lilrbsn.css';
import '../../css/i/i24eo3tiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="x9lilrbsn"/><path class="i24eo3tiw"/></g>`,
		"fallback": "lucide:library-big",
	});
}

export default Component;
