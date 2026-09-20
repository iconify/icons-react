import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/c/crwepn.css';
import '../../css/c/cmp8kl.css';
import '../../css/a/ay17qu.css';
import '../../css/t/tmucss.css';
import '../../css/u/uw59qq.css';
import '../../css/s/so-from-70.css';
import '../../css/d/d-fwg6_w.css';
import '../../css/d/d-7yzihk.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c crwepn"/><path class="cmp8kl"/><path class="a0m25c ay17qu"/><path class="a0m25c tmucss"/><path class="a0m25c uw59qq"/>`,
		"fallback": "line-md:monitor-arrow-down",
	});
}

export default Component;
