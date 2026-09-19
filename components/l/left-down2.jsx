import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6hbulb-g.css';
import '../../css/t/tcuq2ituc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6hbulb-g"/><path class="tcuq2ituc"/>`,
		"fallback": "flat-color-icons:left-down2",
	});
}

export default Component;
