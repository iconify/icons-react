import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwgv7ib-v.css';
import '../../css/f/fouauzkco.css';
import '../../css/f/feis6rhhc.css';
import '../../css/d/d06d92bhc.css';
import '../../css/k/krfzk8bav.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwgv7ib-v"/><path class="fouauzkco"/><path class="feis6rhhc"/><path class="d06d92bhc"/><path class="krfzk8bav"/>`,
		"fallback": "energy-icons:tennis-48-bold",
	});
}

export default Component;
