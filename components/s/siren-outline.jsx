import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kek-0ac7m.css';
import '../../css/z/z35qze5mv.css';
import '../../css/q/q3di7sz9i.css';
import '../../css/j/j7ysxhtoh.css';
import '../../css/j/jtg0osotn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kek-0ac7m"/><path class="z35qze5mv"/><path clip-rule="evenodd" class="q3di7sz9i"/><path class="j7ysxhtoh"/><path class="jtg0osotn"/>`,
		"fallback": "solar:siren-outline",
	});
}

export default Component;
