import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf0kz77ab.css';
import '../../css/o/o1_egw1bm.css';
import '../../css/n/nuw157b1i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf0kz77ab"/><rect class="o1_egw1bm"/><rect class="nuw157b1i"/>`,
		"fallback": "material-icon-theme:raml",
	});
}

export default Component;
