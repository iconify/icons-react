import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a8aefvb5d.css';
import '../../css/u/u95v_ob6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a8aefvb5d"/><path class="u95v_ob6h"/></g>`,
		"fallback": "tabler:menorah",
	});
}

export default Component;
