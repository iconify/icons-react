import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc5thce2f.css';
import '../../css/x/xo1yjrb5w.css';
import '../../css/w/wk9a195np.css';
import '../../css/x/x0qkfr1ft.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xc5thce2f"/><circle class="xo1yjrb5w"/><circle class="wk9a195np"/><path class="x0qkfr1ft"/>`,
		"fallback": "carbon:scatter-matrix",
	});
}

export default Component;
