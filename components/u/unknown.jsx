import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6riqxspa.css';
import '../../css/o/o2503rbla.css';
import '../../css/y/yti26qboi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v6riqxspa"/><path class="o2503rbla"/><path class="yti26qboi"/>`,
		"fallback": "carbon:unknown",
	});
}

export default Component;
