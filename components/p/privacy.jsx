import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9t5qgbnj.css';
import '../../css/u/uqsh6ibhf.css';
import '../../css/t/twp4zob4x.css';
import '../../css/v/vox0oqb1v.css';
import '../../css/q/qeol496zl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9t5qgbnj"/><path class="uqsh6ibhf"/><circle class="twp4zob4x"/><circle class="vox0oqb1v"/><circle class="qeol496zl"/>`,
		"fallback": "flat-color-icons:privacy",
	});
}

export default Component;
