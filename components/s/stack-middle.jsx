import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsemn25zi.css';
import '../../css/g/gtqbe8bko.css';
import '../../css/o/oza9rwbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nsemn25zi"/><path class="gtqbe8bko"/><path class="oza9rwbkn"/></g>`,
		"fallback": "tabler:stack-middle",
	});
}

export default Component;
