import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2oc4mbya.css';
import '../../css/y/ye2ymf1gu.css';
import '../../css/t/tu7ylzb3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2oc4mbya"/><path class="ye2ymf1gu"/><path class="tu7ylzb3j"/>`,
		"fallback": "material-icon-theme:siyuan",
	});
}

export default Component;
