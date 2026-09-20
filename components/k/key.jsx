import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/g/g9dbf7k3r.css';
import '../../css/z/zs-5weoak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="g9dbf7k3r"/><path class="zs-5weoak"/></g>`,
		"fallback": "lets-icons:key",
	});
}

export default Component;
