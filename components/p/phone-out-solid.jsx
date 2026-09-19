import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu-d01bjj.css';
import '../../css/n/nm2dxfjpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mu-d01bjj"/><path class="nm2dxfjpj"/>`,
		"fallback": "basil:phone-out-solid",
	});
}

export default Component;
