import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7poolbui.css';
import '../../css/q/qc9ri3n6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7poolbui"/><path class="qc9ri3n6a"/>`,
		"fallback": "streamline-ultimate:virtual-coin-crypto-namecoin-bold",
	});
}

export default Component;
