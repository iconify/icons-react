import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wwxxnu_vl.css';
import '../../css/x/xswrwubyq.css';
import '../../css/f/fwt8thbhp.css';
import '../../css/t/t58o8zbmj.css';
import '../../css/c/co11yjizw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="wwxxnu_vl"/><path class="xswrwubyq"/><path class="fwt8thbhp"/><path class="t58o8zbmj"/><path class="co11yjizw"/></g>`,
		"fallback": "icon-park:report",
	});
}

export default Component;
