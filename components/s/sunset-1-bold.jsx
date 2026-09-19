import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mof-mqc8u.css';
import '../../css/z/z4rdixorf.css';
import '../../css/o/o3x5bbc6l.css';
import '../../css/n/nenukhlts.css';
import '../../css/p/pqgz9bbzv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mof-mqc8u"/><path class="z4rdixorf"/><path class="o3x5bbc6l"/><path class="nenukhlts"/><path class="pqgz9bbzv"/></g>`,
		"fallback": "glyphs:sunset-1-bold",
	});
}

export default Component;
