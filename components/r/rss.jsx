import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxvvz6jiy.css';
import '../../css/c/c_v1vmbxo.css';
import '../../css/k/kev1szbzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxvvz6jiy"/><path class="c_v1vmbxo"/><path class="kev1szbzf"/>`,
		"fallback": "cil:rss",
	});
}

export default Component;
