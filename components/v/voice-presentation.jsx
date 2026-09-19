import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bng3m8b7n.css';
import '../../css/y/yy-od7caa.css';
import '../../css/o/om051pb-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bng3m8b7n"/><circle class="yy-od7caa"/><path class="om051pb-s"/>`,
		"fallback": "flat-color-icons:voice-presentation",
	});
}

export default Component;
