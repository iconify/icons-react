import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2mf5ebrq.css';
import '../../css/o/o_3md2c4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2mf5ebrq"/><path class="o_3md2c4n"/>`,
		"fallback": "file-icons:scilla",
	});
}

export default Component;
