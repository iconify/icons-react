import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euov_5bqj.css';
import '../../css/o/o_7ob93fj.css';
import '../../css/y/ysqt2irzb.css';
import '../../css/a/aermgf_ls.css';
import '../../css/s/s632r_bsu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euov_5bqj"/><path class="o_7ob93fj"/><path class="ysqt2irzb"/><path class="aermgf_ls"/><path class="s632r_bsu"/>`,
		"fallback": "fxemoji:volcano",
	});
}

export default Component;
