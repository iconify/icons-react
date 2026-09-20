import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9_46pisx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9_46pisx"/>`,
		"fallback": "token:pica",
	});
}

export default Component;
