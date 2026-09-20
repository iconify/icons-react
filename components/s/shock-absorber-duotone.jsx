import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x7wyj6bnu.css';
import '../../css/g/gienrd96p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x7wyj6bnu"/><path class="gienrd96p"/></g>`,
		"fallback": "reicon:shock-absorber-duotone",
	});
}

export default Component;
