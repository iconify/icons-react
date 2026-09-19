import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nln80aciw.css';
import '../../css/k/k01r6evgn.css';
import '../../css/k/kk0hmeb4g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nln80aciw"/><path class="k01r6evgn"/><path class="kk0hmeb4g"/>`,
		"fallback": "carbon:sustainability",
	});
}

export default Component;
