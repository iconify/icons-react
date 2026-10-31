import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r86azabhr.css';
import '../../css/g/gidh62bnp.css';
import '../../css/b/blfr88bmm.css';
import '../../css/e/eb2rtqbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="r86azabhr wm-shadow"/><path class="gidh62bnp wm-shadow"/><path class="blfr88bmm"/><path class="eb2rtqbzb"/></g>`,
		"fallback": "withicons-brutal:tv",
	});
}

export default Component;
