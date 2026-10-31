import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v746_xxbt.css';
import '../../css/p/p-36ppbwo.css';
import '../../css/g/gvecnl_9x.css';
import '../../css/j/j84icywvn.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v746_xxbt"/><path class="p-36ppbwo"/><path class="gvecnl_9x"/><path class="j84icywvn"/>`,
		"fallback": "tabler-flags:transnistria",
	});
}

export default Component;
