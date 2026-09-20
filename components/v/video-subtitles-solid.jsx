import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5x1se0wv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a5x1se0wv"/>`,
		"fallback": "streamline-plump:video-subtitles-solid",
	});
}

export default Component;
