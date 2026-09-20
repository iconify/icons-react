import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mywr10jpw.css';
import '../../css/o/o_8rp_bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="mywr10jpw"/><path class="o_8rp_bdd"/></g>`,
		"fallback": "streamline-logos:square-enix-logo",
	});
}

export default Component;
