import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/ql_5iibrw.css';
import '../../css/t/thvy-l7ss.css';
import '../../css/j/jq0k9ob9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ql_5iibrw"/><path class="thvy-l7ss"/><path class="jq0k9ob9h"/></g>`,
		"fallback": "lucide:recycle",
	});
}

export default Component;
