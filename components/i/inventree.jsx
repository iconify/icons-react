import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmaaphb_e.css';
import '../../css/l/lo0jt2wsq.css';
import '../../css/j/jbfqd5bbq.css';
import '../../css/a/a5e7o5buh.css';
import '../../css/j/j5gqes_kk.css';
import '../../css/t/t32r_rbfc.css';
import '../../css/d/djxesibfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmaaphb_e"/><path class="lo0jt2wsq"/><path class="jbfqd5bbq"/><path class="a5e7o5buh"/><path class="j5gqes_kk"/><path class="t32r_rbfc"/><path class="djxesibfk"/>`,
		"fallback": "selfhst:inventree",
	});
}

export default Component;
