import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bznz2_2wt.css';
import '../../css/l/lrr-utbpz.css';

const viewBox = {"width":960,"height":960,"top":-960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bznz2_2wt"/><path class="lrr-utbpz"/>`,
		"fallback": "material-icon-theme:json-schema",
	});
}

export default Component;
