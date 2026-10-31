import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7ephwb-o.css';
import '../../css/t/t_ciu4b3h.css';
import '../../css/g/gbjdtbbzz.css';
import '../../css/b/ba1owlbyh.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7ephwb-o"/><path class="t_ciu4b3h"/><path class="gbjdtbbzz"/><path class="ba1owlbyh"/>`,
		"fallback": "tabler-flags:niger",
	});
}

export default Component;
