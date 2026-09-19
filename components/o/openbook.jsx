import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpl09-boe.css';
import '../../css/m/my7pz4ppw.css';
import '../../css/n/ni4k71_hl.css';
import '../../css/w/w-ic5dfog.css';
import '../../css/z/zzhkhubht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpl09-boe"/><path class="my7pz4ppw"/><path class="ni4k71_hl"/><path class="w-ic5dfog"/><path class="zzhkhubht"/>`,
		"fallback": "fxemoji:openbook",
	});
}

export default Component;
