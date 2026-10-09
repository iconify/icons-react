import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-kpumbeo.css';
import '../../css/j/j98ub3buk.css';
import '../../css/k/kgoatob5h.css';
import '../../css/t/txtl48bjd.css';
import '../../css/w/w-e6kfbsm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-kpumbeo"/><path class="j98ub3buk"/><path class="kgoatob5h"/><path class="txtl48bjd"/><path class="w-e6kfbsm"/>`,
		"fallback": "energy-icons:island-48",
	});
}

export default Component;
