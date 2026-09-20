import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-pid-b-j.css';
import '../../css/d/dlcxmzfqw.css';
import '../../css/i/i_kpawtqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r-pid-b-j"/><circle class="dlcxmzfqw"/><rect class="i_kpawtqq"/></g>`,
		"fallback": "lucide:turntable",
	});
}

export default Component;
