import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2ulsp5ek.css';
import '../../css/v/vxm3ezfpe.css';
import '../../css/z/z6r-ddb-m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2ulsp5ek"/><path class="vxm3ezfpe"/><path class="z6r-ddb-m"/></g>`,
		"fallback": "glyphs:store-duo",
	});
}

export default Component;
