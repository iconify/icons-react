import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub4d63l7m.css';
import '../../css/t/t7y87xbel.css';
import '../../css/d/d47xi2b9o.css';
import '../../css/h/h78w46vlh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ub4d63l7m"/><circle class="t7y87xbel"/><path class="d47xi2b9o"/><path class="h78w46vlh"/>`,
		"fallback": "formkit:sad",
	});
}

export default Component;
