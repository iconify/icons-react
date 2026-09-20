import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4f4mzg3u.css';
import '../../css/a/acpxsnb4x.css';
import '../../css/z/zo4sq-c-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o4f4mzg3u"/><path class="acpxsnb4x"/><path class="zo4sq-c-i"/></g>`,
		"fallback": "streamline-ultimate:water-straw",
	});
}

export default Component;
