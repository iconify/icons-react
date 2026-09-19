import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c2l4so__a.css';
import '../../css/b/bizmaac4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c2l4so__a"/><path class="bizmaac4b"/></g>`,
		"fallback": "covid:social-distancing-do-not-touch",
	});
}

export default Component;
