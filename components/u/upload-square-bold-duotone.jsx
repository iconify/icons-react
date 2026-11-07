import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/a/alvdhmehm.css';
import '../../css/a/aak7csb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="alvdhmehm"/><path class="aak7csb7b"/>`,
		"fallback": "solar:upload-square-bold-duotone",
	});
}

export default Component;
