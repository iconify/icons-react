import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf5ax2rgf.css';
import '../../css/r/r39nnteoa.css';
import '../../css/e/eog225bus.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf5ax2rgf"/><path class="r39nnteoa"/><path class="eog225bus"/>`,
		"fallback": "selfhst:mediamanager-light",
	});
}

export default Component;
