import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3n43-bnv.css';
import '../../css/t/tjg1izbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3n43-bnv"/><path clip-rule="evenodd" class="tjg1izbgt"/>`,
		"fallback": "solar:trash-bin-minimalistic-bold",
	});
}

export default Component;
