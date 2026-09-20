import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-p5z9evf.css';
import '../../css/w/w38qwyopp.css';
import '../../css/j/jnij4gc1o.css';
import '../../css/o/obq5c3bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-p5z9evf"/><path class="w38qwyopp"/><path class="jnij4gc1o"/><path class="obq5c3bpw"/></g>`,
		"fallback": "streamline-ultimate-color:programming-language-html-5",
	});
}

export default Component;
