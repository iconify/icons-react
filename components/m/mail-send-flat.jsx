import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu2-02xnt.css';
import '../../css/g/guj9oizuk.css';
import '../../css/s/s8o4tbb0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xu2-02xnt"/><path class="guj9oizuk"/><path class="s8o4tbb0a"/></g>`,
		"fallback": "streamline-plump-color:mail-send-flat",
	});
}

export default Component;
