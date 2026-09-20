import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1ca1obpz.css';
import '../../css/m/m864ajb-j.css';
import '../../css/e/el-zljbja.css';
import '../../css/x/xi407sbwr.css';
import '../../css/e/ed3wb03hq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1ca1obpz"/><path class="m864ajb-j"/><path class="el-zljbja"/><path class="xi407sbwr"/><path class="ed3wb03hq"/>`,
		"fallback": "selfhst:microsoft",
	});
}

export default Component;
