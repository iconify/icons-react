import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxr4hec5a.css';
import '../../css/z/zwxltobxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxr4hec5a"/><path class="zwxltobxg"/>`,
		"fallback": "selfhst:kan",
	});
}

export default Component;
