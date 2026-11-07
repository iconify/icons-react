import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhln8idvw.css';
import '../../css/k/k7yugubqn.css';
import '../../css/x/xggoo1bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lhln8idvw"/><path class="k7yugubqn"/><path clip-rule="evenodd" class="xggoo1bag"/>`,
		"fallback": "solar:user-plus-outline",
	});
}

export default Component;
