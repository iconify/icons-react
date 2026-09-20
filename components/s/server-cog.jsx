import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/weha31b6b.css';
import '../../css/e/ee2t7xd7i.css';
import '../../css/q/qrtaw5usw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="weha31b6b"/><path class="ee2t7xd7i"/><path class="qrtaw5usw"/></g>`,
		"fallback": "lucide:server-cog",
	});
}

export default Component;
