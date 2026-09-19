import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gopicnb2u.css';
import '../../css/j/jnn1ze4tr.css';
import '../../css/l/lm81dmcdf.css';
import '../../css/v/v5okizjfs.css';
import '../../css/d/dnbr0rh7e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gopicnb2u"/><path class="jnn1ze4tr"/><path class="lm81dmcdf"/><path class="v5okizjfs"/><path class="dnbr0rh7e"/></g>`,
		"fallback": "glyphs:puzzle-duo",
	});
}

export default Component;
