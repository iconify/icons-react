import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e68szxm0m.css';
import '../../css/y/yd68bzboy.css';
import '../../css/u/uh75vufjh.css';
import '../../css/t/tl77kv_9a.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e68szxm0m"/><path class="yd68bzboy"/><path class="uh75vufjh"/><path class="tl77kv_9a"/>`,
		"fallback": "tabler-flags:paraolympic",
	});
}

export default Component;
