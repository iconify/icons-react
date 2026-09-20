import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxl67pbry.css';
import '../../css/r/r2l1z561j.css';
import '../../css/s/s5qf56fne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="jxl67pbry"/><circle class="r2l1z561j"/><circle class="s5qf56fne"/></g>`,
		"fallback": "lucide:more-horizontal",
	});
}

export default Component;
