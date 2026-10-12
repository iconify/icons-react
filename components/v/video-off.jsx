import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czrzf_bfu.css';
import '../../css/d/ddayzub2a.css';
import '../../css/w/w7b6x1bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="czrzf_bfu"/><rect class="ddayzub2a"/><path class="w7b6x1bym"/></g>`,
		"fallback": "andrsrxn:video-off",
	});
}

export default Component;
