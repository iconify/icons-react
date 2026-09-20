import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtmsfsbcp.css';
import '../../css/e/e041-1bai.css';
import '../../css/e/eika0rrpi.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jtmsfsbcp"/><circle class="e041-1bai"/><circle class="eika0rrpi"/>`,
		"fallback": "lineicons:more-alt",
	});
}

export default Component;
