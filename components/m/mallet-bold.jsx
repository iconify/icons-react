import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gd15vvxnd.css';
import '../../css/b/bv5ns8bfe.css';
import '../../css/n/nwa7odbuf.css';
import '../../css/d/dtoswibar.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gd15vvxnd"/><path class="bv5ns8bfe"/><path clip-rule="evenodd" class="nwa7odbuf"/><path class="dtoswibar"/></g>`,
		"fallback": "glyphs:mallet-bold",
	});
}

export default Component;
