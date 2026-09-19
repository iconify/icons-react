import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q33hpgb-j.css';
import '../../css/i/i5r4e0b0g.css';
import '../../css/s/s6a_vl58s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q33hpgb-j"/><rect class="i5r4e0b0g"/><rect class="s6a_vl58s"/>`,
		"fallback": "boxicons:vertical-distribute-bottom-filled",
	});
}

export default Component;
