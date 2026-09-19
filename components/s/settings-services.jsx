import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_06tclpl.css';
import '../../css/z/z2y88ibfp.css';
import '../../css/g/govmrcrfb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_06tclpl"/><path class="z2y88ibfp"/><path class="govmrcrfb"/>`,
		"fallback": "carbon:settings-services",
	});
}

export default Component;
