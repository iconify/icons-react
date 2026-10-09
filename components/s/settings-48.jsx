import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6v-cu3kr.css';
import '../../css/o/o-mw0gu8c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6v-cu3kr"/><path class="o-mw0gu8c"/>`,
		"fallback": "energy-icons:settings-48",
	});
}

export default Component;
