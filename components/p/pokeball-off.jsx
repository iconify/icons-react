import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/semujdb-t.css';
import '../../css/a/aco2reihx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="semujdb-t"/><path class="aco2reihx"/></g>`,
		"fallback": "tabler:pokeball-off",
	});
}

export default Component;
