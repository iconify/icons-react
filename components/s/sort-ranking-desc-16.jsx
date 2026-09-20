import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at8zgcbxx.css';
import '../../css/b/bj_8uhrjw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at8zgcbxx"/><path clip-rule="evenodd" class="bj_8uhrjw"/>`,
		"fallback": "qlementine-icons:sort-ranking-desc-16",
	});
}

export default Component;
