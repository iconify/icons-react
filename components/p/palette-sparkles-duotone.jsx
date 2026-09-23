import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwsn8vb4k.css';
import '../../css/o/o5v9nt9kj.css';
import '../../css/g/gs8ksdb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lwsn8vb4k"/><path class="o5v9nt9kj"/><path class="gs8ksdb9f"/></g>`,
		"fallback": "keyline-icons:palette-sparkles-duotone",
	});
}

export default Component;
