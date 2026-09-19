import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kx31ghuvp.css';
import '../../css/z/z2o0ujiuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="kx31ghuvp"/><circle class="z2o0ujiuj"/></g>`,
		"fallback": "iconamoon:number-8-thin",
	});
}

export default Component;
