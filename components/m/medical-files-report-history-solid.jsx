import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igndbzb9z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="igndbzb9z"/>`,
		"fallback": "streamline:medical-files-report-history-solid",
	});
}

export default Component;
