import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijssdnbls.css';
import '../../css/m/m6zv5vbnf.css';
import '../../css/j/jqr1k9a2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijssdnbls"/><path class="m6zv5vbnf"/><path class="jqr1k9a2a"/>`,
		"fallback": "solar:smart-speaker-2-bold",
	});
}

export default Component;
