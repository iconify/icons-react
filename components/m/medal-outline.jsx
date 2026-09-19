import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az58icbrr.css';
import '../../css/e/eezgffbcj.css';
import '../../css/z/z9r7tyb5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az58icbrr"/><circle class="eezgffbcj"/><path class="z9r7tyb5i"/>`,
		"fallback": "famicons:medal-outline",
	});
}

export default Component;
