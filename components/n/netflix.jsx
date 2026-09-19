import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py--2fjvj.css';
import '../../css/n/nthaozbsr.css';

const viewBox = {"width":13,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py--2fjvj"/><path class="nthaozbsr"/>`,
		"fallback": "fontisto:netflix",
	});
}

export default Component;
