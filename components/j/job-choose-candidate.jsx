import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r-3b590os.css';
import '../../css/b/b1h12fblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r-3b590os"/><path class="b1h12fblw"/></g>`,
		"fallback": "streamline-freehand:job-choose-candidate",
	});
}

export default Component;
