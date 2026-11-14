import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtf2h3l6b.css';
import '../../css/a/a61ltbq0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtf2h3l6b"/><path class="a61ltbq0f"/>`,
		"fallback": "selfhst:papermark",
	});
}

export default Component;
