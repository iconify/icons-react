import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mrba4xy6t.css';
import '../../css/d/dfwy9gb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mrba4xy6t"/><path class="dfwy9gb3n"/></g>`,
		"fallback": "lucide:reply-all",
	});
}

export default Component;
