import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/b4dyhhbeb.css';
import '../../css/f/fo97hvbjm.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcfiNQVot"><g class="k2u665ban"><circle class="b4dyhhbeb"/><path class="fo97hvbjm"/></g></mask></defs><path mask="url(#SVGcfiNQVot)" class="w49j0rbvv"/>`,
		"fallback": "solar:magnifer-line-duotone",
	});
}

export default Component;
