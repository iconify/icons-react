import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hql3ldhxa.css';
import '../../css/o/oynu9y2bq.css';
import '../../css/d/d4ov79bmf.css';
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
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged hql3ldhxa"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged oynu9y2bq"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged d4ov79bmf"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:lightbulb-solid-badged",
	});
}

export default Component;
