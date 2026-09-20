import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgae07xbo.css';
import '../../css/r/rr7ezt0es.css';
import '../../css/x/xfjodpqdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgae07xbo"/><path class="rr7ezt0es"/><path class="xfjodpqdj"/>`,
		"fallback": "tdesign:relativity-filled",
	});
}

export default Component;
