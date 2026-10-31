import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/ljk6fpbmg.css';
import '../../css/g/g55v74fib.css';
import '../../css/c/caum75byk.css';
import '../../css/i/i5itnzzkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ljk6fpbmg wm-shadow"/><path class="g55v74fib wm-shadow"/><path class="caum75byk"/><path class="i5itnzzkz"/></g>`,
		"fallback": "withicons-brutal:panel-top",
	});
}

export default Component;
