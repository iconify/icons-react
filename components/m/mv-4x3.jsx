import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnmkx_dzk.css';
import '../../css/z/z9mmmhbcr.css';
import '../../css/c/ccsgx9gax.css';
import '../../css/r/rvayqzbpx.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnmkx_dzk"/><path class="z9mmmhbcr"/><circle class="ccsgx9gax"/><circle class="rvayqzbpx"/>`,
		"fallback": "flag:mv-4x3",
	});
}

export default Component;
