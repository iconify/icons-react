import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vd-ju8bma.css';
import '../../css/j/jl1t7zikg.css';
import '../../css/o/omyt8vctn.css';
import '../../css/b/b1y4j0b2o.css';
import '../../css/q/q37soib-c.css';
import '../../css/x/xzpbtbbxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="vd-ju8bma"/><path class="jl1t7zikg"/><path class="omyt8vctn"/><path class="b1y4j0b2o"/><path class="q37soib-c"/><path class="xzpbtbbxt"/></g>`,
		"fallback": "icon-park:sofa",
	});
}

export default Component;
