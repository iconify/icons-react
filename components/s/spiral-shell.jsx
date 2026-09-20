import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er2m47bqi.css';
import '../../css/u/uxtmlr4ia.css';
import '../../css/x/xcs724b7k.css';
import '../../css/j/jvho-acgb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er2m47bqi"/><path class="uxtmlr4ia"/><path class="xcs724b7k"/><path class="jvho-acgb"/>`,
		"fallback": "openmoji:spiral-shell",
	});
}

export default Component;
