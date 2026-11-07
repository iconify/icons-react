import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls12hhbch.css';
import '../../css/u/ugczn2boc.css';
import '../../css/j/j855t9sbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls12hhbch"/><path class="ugczn2boc"/><path class="j855t9sbc"/>`,
		"fallback": "solar:user-hand-up-bold-duotone",
	});
}

export default Component;
