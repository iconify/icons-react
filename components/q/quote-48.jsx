import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h34p0iehr.css';
import '../../css/z/zab0-ccwk.css';
import '../../css/b/b-mdupdvm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h34p0iehr"/><path class="zab0-ccwk"/><path class="b-mdupdvm"/>`,
		"fallback": "energy-icons:quote-48",
	});
}

export default Component;
