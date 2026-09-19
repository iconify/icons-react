import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7806flpi.css';
import '../../css/v/v9la5m20b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7806flpi"/><path class="v9la5m20b"/>`,
		"fallback": "carbon:next-filled",
	});
}

export default Component;
