import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_09h_bys.css';
import '../../css/r/r62on_nvj.css';
import '../../css/v/v_ckypzwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x_09h_bys"/><path class="r62on_nvj"/><path class="v_ckypzwj"/>`,
		"fallback": "solar:palette-bold",
	});
}

export default Component;
