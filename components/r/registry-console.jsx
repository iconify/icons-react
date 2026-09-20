import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc17ftbpa.css';
import '../../css/c/c2ggwgpcw.css';
import '../../css/l/l6tftisdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc17ftbpa"/><path class="c2ggwgpcw"/><path class="l6tftisdq"/>`,
		"fallback": "selfhst:registry-console",
	});
}

export default Component;
