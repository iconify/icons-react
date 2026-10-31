import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gktr6dbvg.css';
import '../../css/f/fr0bdx4ob.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gktr6dbvg"/><path class="fr0bdx4ob"/>`,
		"fallback": "tabler-flags:north-macedonia",
	});
}

export default Component;
