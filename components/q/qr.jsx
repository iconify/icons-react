import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th3frzmbn.css';
import '../../css/v/vicwwriiv.css';
import '../../css/l/lgqplm52b.css';
import '../../css/j/js2ykrl4d.css';
import '../../css/c/c3c8skb4r.css';
import '../../css/b/bh__ek2xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="th3frzmbn"/><path class="vicwwriiv"/><path clip-rule="evenodd" class="lgqplm52b"/><path clip-rule="evenodd" class="js2ykrl4d"/><path class="c3c8skb4r"/><path class="bh__ek2xm"/>`,
		"fallback": "token:qr",
	});
}

export default Component;
