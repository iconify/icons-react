import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s9kr0dbnj.css';
import '../../css/q/qvpv5zd3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s9kr0dbnj"/><path class="qvpv5zd3z"/></g>`,
		"fallback": "vadivam:redo-2",
	});
}

export default Component;
