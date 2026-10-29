import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaarvgb4j.css';
import '../../css/v/vtoiukfqw.css';
import '../../css/f/fmg_-iv0m.css';
import '../../css/w/wwcz5sdbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k zaarvgb4j"/><path class="vtoiukfqw wm-a"/><path class="fmg_-iv0m wm-k"/><path class="wm-k wwcz5sdbj"/>`,
		"fallback": "withicons-bauhaus:pizza",
	});
}

export default Component;
