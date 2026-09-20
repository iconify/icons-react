import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwy_4lplo.css';
import '../../css/n/n2zz0dpiu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwy_4lplo"/><ellipse class="n2zz0dpiu"/>`,
		"fallback": "nimbus:tag",
	});
}

export default Component;
