import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cmql4cbof.css';
import '../../css/y/y2c2wfjhs.css';
import '../../css/n/niwa7c92f.css';
import '../../css/m/m8w2gjabi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cmql4cbof"/><path class="y2c2wfjhs"/><path class="niwa7c92f"/><path class="m8w2gjabi"/></g>`,
		"fallback": "glyphs:layer-back-outline",
	});
}

export default Component;
