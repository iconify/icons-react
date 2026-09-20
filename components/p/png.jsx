import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piu2dnbsw.css';
import '../../css/q/qapg4nbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piu2dnbsw"/><path clip-rule="evenodd" class="qapg4nbep"/>`,
		"fallback": "token:png",
	});
}

export default Component;
