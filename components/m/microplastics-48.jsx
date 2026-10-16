import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja4f5ybie.css';
import '../../css/u/ug7yt43lf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja4f5ybie"/><path class="ug7yt43lf"/>`,
		"fallback": "energy-icons:microplastics-48",
	});
}

export default Component;
