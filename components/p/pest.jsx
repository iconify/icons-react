import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_b_x8p1s.css';
import '../../css/a/aiphr2b7y.css';
import '../../css/v/v1hs-27qp.css';
import '../../css/u/u-3sx8b9f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t_b_x8p1s"/><circle class="aiphr2b7y"/><circle class="v1hs-27qp"/><path class="u-3sx8b9f"/>`,
		"fallback": "carbon:pest",
	});
}

export default Component;
