import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqa7g4vnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqa7g4vnw"/>`,
		"fallback": "noviair-light:washing-machine-pause",
	});
}

export default Component;
