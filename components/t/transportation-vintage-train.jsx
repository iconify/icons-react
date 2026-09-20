import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlb8v_b5v.css';
import '../../css/p/pcir-8toc.css';
import '../../css/l/lbh3hgb-e.css';
import '../../css/t/tb3wj67dv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlb8v_b5v"/><path class="pcir-8toc"/><path class="lbh3hgb-e"/><path class="tb3wj67dv"/>`,
		"fallback": "streamline-pixel:transportation-vintage-train",
	});
}

export default Component;
