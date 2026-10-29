import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf22gsbmi.css';
import '../../css/h/hlcjghfxa.css';
import '../../css/q/qyt2qibcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf22gsbmi wm-a"/><path class="hlcjghfxa wm-a"/><path class="qyt2qibcp wm-k"/>`,
		"fallback": "withicons-bauhaus:list-checks",
	});
}

export default Component;
