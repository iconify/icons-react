import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/c/cyzopgbdr.css';
import '../../css/a/a8924ab8w.css';
import '../../css/b/bxcg2tb1i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="cyzopgbdr"/><path class="a8924ab8w"/><path class="bxcg2tb1i"/></g>`,
		"fallback": "glyphs:surprise-duo",
	});
}

export default Component;
