import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5xotxb0o.css';
import '../../css/u/uhqrniblc.css';
import '../../css/v/vj5bxhb8m.css';
import '../../css/p/pte72cc4w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5xotxb0o"/><path class="uhqrniblc"/><path class="vj5bxhb8m"/><path class="pte72cc4w"/>`,
		"fallback": "ant-design:setting-twotone",
	});
}

export default Component;
