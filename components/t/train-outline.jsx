import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pogviobod.css';
import '../../css/z/zy8ghtbyu.css';
import '../../css/g/gnmfys7zl.css';
import '../../css/f/fc5zd0b4n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pogviobod"/><path class="zy8ghtbyu"/><path class="gnmfys7zl"/><path class="fc5zd0b4n"/></g>`,
		"fallback": "glyphs:train-outline",
	});
}

export default Component;
