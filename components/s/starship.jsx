import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmqd7lb1z.css';
import '../../css/s/s6x7m9trg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcVHSkeyt" maskUnits="userSpaceOnUse"><circle class="nmqd7lb1z"/></mask></defs><path mask="url(#SVGcVHSkeyt)" class="s6x7m9trg"/>`,
		"fallback": "devicon-plain:starship",
	});
}

export default Component;
