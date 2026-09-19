import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcs7_bcpt.css';
import '../../css/o/oq0kdrbfu.css';
import '../../css/b/bivc0_8ea.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcs7_bcpt"/><path class="oq0kdrbfu"/><path class="bivc0_8ea"/>`,
		"fallback": "formkit:lira",
	});
}

export default Component;
