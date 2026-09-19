import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_2i5mwhi.css';
import '../../css/k/kqtb-7b7t.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged j_2i5mwhi"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged kqtb-7b7t"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:resource-pool-solid-badged",
	});
}

export default Component;
