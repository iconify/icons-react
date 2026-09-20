import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwzi9g3uh.css';
import '../../css/n/nhrqm3bvg.css';
import '../../css/p/pgd03r94f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rwzi9g3uh"/><path class="nhrqm3bvg"/><path class="pgd03r94f"/></g>`,
		"fallback": "tabler:user-square-rounded",
	});
}

export default Component;
