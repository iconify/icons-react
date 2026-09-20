import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct5bir.css';
import '../../css/a/a0m25c.css';
import '../../css/m/m2hv7f.css';
import '../../css/x/xf_gao.css';
import '../../css/d/d-3fqnuo.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct5bir"/><path class="a0m25c m2hv7f"/><path class="a0m25c xf_gao"/>`,
		"fallback": "line-md:steering",
	});
}

export default Component;
