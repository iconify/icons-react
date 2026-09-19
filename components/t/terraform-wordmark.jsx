import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muf9dmvup.css';
import '../../css/t/ta5vg_czn.css';
import '../../css/x/xbh5ctbef.css';
import '../../css/p/pvabr9frm.css';
import '../../css/b/b5rkaq6ql.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muf9dmvup"/><path class="ta5vg_czn"/><path class="xbh5ctbef"/><path class="pvabr9frm"/><path class="b5rkaq6ql"/>`,
		"fallback": "devicon:terraform-wordmark",
	});
}

export default Component;
