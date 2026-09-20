import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i-s3i-75f.css';
import '../../css/g/gairseb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i-s3i-75f"/><path class="gairseb0o"/></g>`,
		"fallback": "streamline-freehand-color:phone-camera-rear-quardruple",
	});
}

export default Component;
