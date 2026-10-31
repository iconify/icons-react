import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgbhcdb8z.css';
import '../../css/a/aetdrzb6l.css';
import '../../css/n/n-k5dxbht.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgbhcdb8z"/><path class="aetdrzb6l"/><path class="n-k5dxbht"/>`,
		"fallback": "tabler-flags:sealand",
	});
}

export default Component;
