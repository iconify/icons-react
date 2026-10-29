import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s27vycciu.css';
import '../../css/h/hd25gx5lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s27vycciu"/><path class="hd25gx5lf"/></g>`,
		"fallback": "vadivam:monitor-cog",
	});
}

export default Component;
