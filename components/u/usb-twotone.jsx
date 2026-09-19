import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbvvc5y2r.css';
import '../../css/p/pugtge_xh.css';
import '../../css/z/zn2ui6aai.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbvvc5y2r"/><path class="pugtge_xh"/><path class="zn2ui6aai"/>`,
		"fallback": "ant-design:usb-twotone",
	});
}

export default Component;
