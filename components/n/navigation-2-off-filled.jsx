import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw-2n_btc.css';
import '../../css/g/gawagji8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw-2n_btc"/><path clip-rule="evenodd" class="gawagji8w"/>`,
		"fallback": "lucide-extended:navigation-2-off-filled",
	});
}

export default Component;
