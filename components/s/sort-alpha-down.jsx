import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcdbvr6xr.css';
import '../../css/a/a-5u-gekh.css';
import '../../css/j/jrqm38_ak.css';
import '../../css/a/ajcefqbiu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kcdbvr6xr"/><path class="a-5u-gekh"/><path class="jrqm38_ak"/><path class="ajcefqbiu"/></g>`,
		"fallback": "glyphs-poly:sort-alpha-down",
	});
}

export default Component;
