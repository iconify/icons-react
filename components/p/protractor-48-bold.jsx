import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6q-m_77w.css';
import '../../css/l/l__xd22cd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6q-m_77w"/><path class="l__xd22cd"/>`,
		"fallback": "energy-icons:protractor-48-bold",
	});
}

export default Component;
