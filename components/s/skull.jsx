import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c974-jgxw.css';
import '../../css/h/hi4pc4bnr.css';
import '../../css/v/v15isc0yr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c974-jgxw"/><circle class="hi4pc4bnr"/><circle class="v15isc0yr"/></g>`,
		"fallback": "charm:skull",
	});
}

export default Component;
