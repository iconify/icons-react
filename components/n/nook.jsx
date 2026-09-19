import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkscqfo9m.css';
import '../../css/l/lrasntecx.css';
import '../../css/b/b3m_3poii.css';
import '../../css/o/oewulyb2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkscqfo9m"/><path class="lrasntecx"/><path class="b3m_3poii"/><path class="oewulyb2s"/>`,
		"fallback": "flat-color-icons:nook",
	});
}

export default Component;
