import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql_i8kbyq.css';
import '../../css/k/kq57ou01f.css';
import '../../css/u/unhv08bwh.css';
import '../../css/s/s1neog13s.css';
import '../../css/b/bcdx0nhxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ql_i8kbyq"/><path class="kq57ou01f"/><path clip-rule="evenodd" class="unhv08bwh"/><path class="s1neog13s"/><path clip-rule="evenodd" class="bcdx0nhxq"/>`,
		"fallback": "mingcute:ubuntu-fill",
	});
}

export default Component;
