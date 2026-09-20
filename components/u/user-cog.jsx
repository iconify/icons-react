import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/naztyfwja.css';
import '../../css/z/zo4h-60oq.css';
import '../../css/t/t-u0yzblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="naztyfwja"/><circle class="zo4h-60oq"/><circle class="t-u0yzblp"/></g>`,
		"fallback": "lucide:user-cog",
	});
}

export default Component;
