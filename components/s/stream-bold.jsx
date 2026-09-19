import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcczw9bad.css';
import '../../css/u/u5k1hcfaz.css';
import '../../css/j/jp-5skmgv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wcczw9bad"><path class="u5k1hcfaz"/><path class="jp-5skmgv"/></g>`,
		"fallback": "glyphs:stream-bold",
	});
}

export default Component;
