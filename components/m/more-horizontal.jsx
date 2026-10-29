import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imt3fu8pc.css';
import '../../css/g/g9wjd3b3c.css';
import '../../css/o/oqnjuob9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imt3fu8pc"/><path class="g9wjd3b3c"/><path class="oqnjuob9o"/>`,
		"fallback": "withicons-bauhaus:more-horizontal",
	});
}

export default Component;
