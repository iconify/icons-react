import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyqotpbcg.css';
import '../../css/s/sln3okb-w.css';
import '../../css/g/g2y24gmro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lyqotpbcg"><rect class="sln3okb-w"/><path class="g2y24gmro"/></g>`,
		"fallback": "lets-icons:mic-alt-duotone",
	});
}

export default Component;
