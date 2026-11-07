import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b--gob6xd.css';
import '../../css/s/siuvu-jzd.css';
import '../../css/r/r377frbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b--gob6xd"/><path clip-rule="evenodd" class="siuvu-jzd"/><path class="r377frbsh"/>`,
		"fallback": "solar:wallet-money-bold",
	});
}

export default Component;
