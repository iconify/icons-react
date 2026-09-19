import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/abjl_cc-a.css';
import '../../css/h/htqickbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="abjl_cc-a"/><path class="htqickbfa"/></g>`,
		"fallback": "hugeicons:settings-02",
	});
}

export default Component;
