import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8undab2j.css';
import '../../css/x/xondpqjln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x8undab2j"/><path class="xondpqjln"/></g>`,
		"fallback": "tabler:motorbike",
	});
}

export default Component;
