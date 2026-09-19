import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/i/iuqa1tb0d.css';
import '../../css/j/jsx4299_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="iuqa1tb0d"/><path class="jsx4299_p"/></g>`,
		"fallback": "codex:marker",
	});
}

export default Component;
