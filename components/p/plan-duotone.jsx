import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unw49zadl.css';
import '../../css/o/ooyrpacaq.css';
import '../../css/z/zx2i3saxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unw49zadl"/><path class="ooyrpacaq"/><path class="zx2i3saxl"/>`,
		"fallback": "stash:plan-duotone",
	});
}

export default Component;
