import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugl89-lzx.css';
import '../../css/a/ardjzjb-d.css';
import '../../css/p/palc4vbjx.css';
import '../../css/k/krw19nbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugl89-lzx"/><path class="ardjzjb-d"/><path class="palc4vbjx"/><path class="krw19nbxw"/>`,
		"fallback": "cbi:technics",
	});
}

export default Component;
