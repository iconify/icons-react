import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxtq6hf-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxtq6hf-x"/>`,
		"fallback": "material-icon-theme:panda",
	});
}

export default Component;
