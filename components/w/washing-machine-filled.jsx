import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayvh8hlxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ayvh8hlxw"/>`,
		"fallback": "griddy-icons:washing-machine-filled",
	});
}

export default Component;
