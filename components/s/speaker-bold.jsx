import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6csbbc5i.css';
import '../../css/m/mjj5aehmb.css';
import '../../css/i/i67c3yb3a.css';
import '../../css/u/uk35fercj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i6csbbc5i"/><path clip-rule="evenodd" class="mjj5aehmb"/><path class="i67c3yb3a"/><path clip-rule="evenodd" class="uk35fercj"/></g>`,
		"fallback": "glyphs:speaker-bold",
	});
}

export default Component;
