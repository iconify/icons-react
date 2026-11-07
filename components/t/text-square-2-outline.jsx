import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b53cjslek.css';
import '../../css/k/k_gbamc1v.css';
import '../../css/h/hi8bol3jn.css';
import '../../css/f/fk81ubbzb.css';
import '../../css/u/ucpl_kbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b53cjslek"/><path class="k_gbamc1v"/><path class="hi8bol3jn"/><path class="fk81ubbzb"/><path class="ucpl_kbnp"/>`,
		"fallback": "solar:text-square-2-outline",
	});
}

export default Component;
