import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k77fnfbma.css';
import '../../css/g/ggp2rgbib.css';
import '../../css/r/rlvpsdb0c.css';
import '../../css/l/lg4s_3gdi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k77fnfbma"/><path class="ggp2rgbib"/><path class="rlvpsdb0c"/><path class="lg4s_3gdi"/>`,
		"fallback": "energy-icons:lakeside-cabin-20",
	});
}

export default Component;
