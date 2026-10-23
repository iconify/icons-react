import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agaydb0uo.css';
import '../../css/y/ymvbqj2pd.css';
import '../../css/c/ctjobacav.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="agaydb0uo"/><path class="ymvbqj2pd"/><path clip-rule="evenodd" class="ctjobacav"/></g>`,
		"fallback": "healthicons:pharmacy-dept-outline",
	});
}

export default Component;
