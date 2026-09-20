import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6-dp9v5j.css';
import '../../css/z/z7hf2lnoo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6-dp9v5j"/><path class="ouiIcon__fillSecondary z7hf2lnoo"/>`,
		"fallback": "oui:ml-regression-job",
	});
}

export default Component;
