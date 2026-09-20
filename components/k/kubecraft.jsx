import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4imvxbfg.css';
import '../../css/p/pdqwe3x1i.css';
import '../../css/a/a2shhjbqb.css';
import '../../css/e/eldq07ydi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4imvxbfg"/><path class="pdqwe3x1i"/><path class="a2shhjbqb"/><path class="eldq07ydi"/>`,
		"fallback": "selfhst:kubecraft",
	});
}

export default Component;
