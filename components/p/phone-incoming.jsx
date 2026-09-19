import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maosicbit.css';
import '../../css/k/kggl2nbnj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maosicbit"/><path class="kggl2nbnj"/>`,
		"fallback": "carbon:phone-incoming",
	});
}

export default Component;
