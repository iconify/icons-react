import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz8cebuhr.css';
import '../../css/i/igmbzigbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz8cebuhr"/><path class="igmbzigbl"/>`,
		"fallback": "selfhst:nutalert",
	});
}

export default Component;
