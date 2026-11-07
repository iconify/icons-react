import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l79lhfkzr.css';
import '../../css/h/hi_zb0bdv.css';
import '../../css/z/zy5pg_7lj.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l79lhfkzr"/><path class="hi_zb0bdv"/><path class="zy5pg_7lj"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:upload-twice-square-outline",
	});
}

export default Component;
