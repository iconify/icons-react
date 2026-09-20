import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moh21tptg.css';
import '../../css/o/o72bh4q6z.css';
import '../../css/c/c5142wicy.css';
import '../../css/x/x0isxmtro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="moh21tptg"/><path class="o72bh4q6z"/><path clip-rule="evenodd" class="c5142wicy"/><path class="x0isxmtro"/>`,
		"fallback": "selfhst:plikshare",
	});
}

export default Component;
