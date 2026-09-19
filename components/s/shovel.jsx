import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o1a4vtbzg.css';
import '../../css/r/r-mx4918m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="o1a4vtbzg"/><path class="r-mx4918m"/></g>`,
		"fallback": "glyphs-poly:shovel",
	});
}

export default Component;
