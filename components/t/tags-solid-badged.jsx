import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp1mmybuc.css';
import '../../css/l/lis884bqb.css';
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
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged jp1mmybuc"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged lis884bqb"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tags-solid-badged",
	});
}

export default Component;
