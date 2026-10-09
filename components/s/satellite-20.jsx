import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2bhn2v8h.css';
import '../../css/w/whvapjd8j.css';
import '../../css/o/o_af29byo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2bhn2v8h"/><path class="whvapjd8j"/><path class="o_af29byo"/>`,
		"fallback": "energy-icons:satellite-20",
	});
}

export default Component;
