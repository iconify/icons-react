import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3-jnqb4z.css';
import '../../css/c/c7wml7kwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3-jnqb4z"/><path class="c7wml7kwc"/>`,
		"fallback": "streamline-plump:mail-outgoing-solid",
	});
}

export default Component;
