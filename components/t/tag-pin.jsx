import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bihy864ah.css';
import '../../css/z/z6x2wbc8j.css';
import '../../css/h/hcstxz92j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bihy864ah"/><path class="z6x2wbc8j"/><path class="hcstxz92j"/></g>`,
		"fallback": "tabler:tag-pin",
	});
}

export default Component;
