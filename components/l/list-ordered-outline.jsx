import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2du46z8a.css';
import '../../css/l/ltlw69bzm.css';
import '../../css/t/tf7t0y6bk.css';
import '../../css/c/cekfqs6vf.css';
import '../../css/f/fihon3scm.css';
import '../../css/z/zfe9u-5ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2du46z8a"/><path class="ltlw69bzm"/><path class="tf7t0y6bk"/><path class="cekfqs6vf"/><path class="fihon3scm"/><path class="zfe9u-5ub"/>`,
		"fallback": "solar:list-ordered-outline",
	});
}

export default Component;
