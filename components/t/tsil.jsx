import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f32j-zrdv.css';
import '../../css/t/t_s3ty_ue.css';
import '../../css/f/f-nfbsbjy.css';
import '../../css/l/l7yuwkycl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f32j-zrdv"/><path class="t_s3ty_ue"/><path class="f-nfbsbjy"/><path class="l7yuwkycl"/>`,
		"fallback": "material-icon-theme:tsil",
	});
}

export default Component;
