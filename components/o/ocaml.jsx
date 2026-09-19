import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaiyq5bvp.css';
import '../../css/r/r4lzt7bws.css';
import '../../css/a/apwd9x61f.css';
import '../../css/c/c2x12s28z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qaiyq5bvp"><path class="r4lzt7bws"/><path class="apwd9x61f"/><path class="c2x12s28z"/></g>`,
		"fallback": "catppuccin:ocaml",
	});
}

export default Component;
