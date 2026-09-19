import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf_c39byp.css';
import '../../css/a/aqyw_snoc.css';
import '../../css/i/idkd0abbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf_c39byp"/><path class="aqyw_snoc"/><path class="idkd0abbq"/>`,
		"fallback": "bxl:trip-advisor",
	});
}

export default Component;
