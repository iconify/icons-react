import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq_xkudui.css';
import '../../css/v/vmcz4dbnx.css';
import '../../css/a/ae5wlvbyl.css';
import '../../css/i/idx3-fbpc.css';
import '../../css/n/n9aw_wett.css';
import '../../css/z/zqw-2nb-u.css';
import '../../css/q/q-z8u9qio.css';
import '../../css/t/tkbog5bpr.css';
import '../../css/j/j--d0i75f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq_xkudui"/><path class="vmcz4dbnx"/><path class="ae5wlvbyl"/><path class="idx3-fbpc"/><path class="n9aw_wett"/><path class="zqw-2nb-u"/><path class="q-z8u9qio"/><path class="tkbog5bpr"/><path class="j--d0i75f"/>`,
		"fallback": "selfhst:linux-containers-lxc",
	});
}

export default Component;
