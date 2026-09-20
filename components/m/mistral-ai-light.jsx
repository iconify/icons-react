import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngudvtbhg.css';
import '../../css/i/iqqla4wjy.css';
import '../../css/c/c2e35emrs.css';
import '../../css/k/ken8xlbvk.css';
import '../../css/v/v24tgxb9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngudvtbhg"/><path class="iqqla4wjy"/><path class="c2e35emrs"/><path class="ken8xlbvk"/><path class="v24tgxb9s"/>`,
		"fallback": "selfhst:mistral-ai-light",
	});
}

export default Component;
