import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msa_hlb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msa_hlb-i"/>`,
		"fallback": "cbi:panel-glassdoor-close",
	});
}

export default Component;
